// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "hardhat/console.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { svg } from "@erc721k/periphery-sol/contracts/svg/svg.sol";
import { svgUtils } from "@erc721k/periphery-sol/contracts/svg/svgUtils.sol";
import { SVGLibrary } from "@erc721k/periphery-sol/contracts/svg/SVGLibrary.sol";
import { ISVGModule } from "../interfaces/ISVGModule.sol";

contract PoolyPixelSvgModule is ISVGModule, Ownable {
  SVGLibrary private _svgLibrary;

  string private _encoding = "(uint8)";
  bytes32 private constant BUILD = keccak256("BUILD");
  bytes32 private constant COLOR = keccak256("COLOR");
  bytes32 private constant UTILS = keccak256("UTILS");

  mapping(uint8 => mapping(uint8 => string)) private _elements;

  constructor(address svgLibrary) {
    _svgLibrary = SVGLibrary(svgLibrary);
  }

  function render(bytes memory input) external view override returns (string memory) {
    return _render(input);
  }

  function getEncoding() external view override returns (string memory) {
    return _encoding;
  }

  function getElement(uint8 element, uint8 position) external view returns (string memory) {
    return _elements[element][position];
  }

  function setElement(
    uint8 element,
    uint8 position,
    string memory svg
  ) external onlyOwner {
    _elements[element][position] = svg;
  }

  function _color(string memory _sig, string memory _value) internal view returns (string memory) {
    return _svgLibrary.execute(COLOR, abi.encodeWithSignature(_sig, _value));
  }

  function _props(string memory _key, string memory _value) internal view returns (string memory) {
    return _svgLibrary.execute(BUILD, abi.encodeWithSignature("prop(string,string)", _key, _value));
  }

  function _render(bytes memory input) internal view returns (string memory) {
    (uint8 elementType, uint8 elementId) = abi.decode(input, (uint8, uint8));
    return _elements[elementType][elementId];
  }
}
