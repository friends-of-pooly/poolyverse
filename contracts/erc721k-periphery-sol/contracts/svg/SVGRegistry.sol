// SPDX-License-Identifier: MIT
pragma solidity 0.8.15;

import "hardhat/console.sol";
import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { ISVGModule } from "../interfaces/ISVGModule.sol";

contract SVGRegistry is Ownable {
  mapping(bytes32 => address) private _modules;

  constructor() {}

  function fetch(bytes32 widgetId, bytes memory input) external view returns (string memory) {
    if (_modules[widgetId] != address(0)) {
      return ISVGModule(_modules[widgetId]).render(input);
    } else {
      console.log("nada");
      return "";
    }
  }

  function getWidget(bytes32 widgetId) external view returns (address widget) {
    return _modules[widgetId];
  }

  function setWidget(bytes32 widgetId, address widget) external onlyOwner {
    _modules[widgetId] = widget;
  }

  function bytes32ToString(bytes32 _bytes32) internal pure returns (string memory) {
    uint8 i = 0;
    bytes memory bytesArray = new bytes(64);
    for (i = 0; i < bytesArray.length; i++) {
      uint8 _f = uint8(_bytes32[i / 2] & 0x0f);
      uint8 _l = uint8(_bytes32[i / 2] >> 4);

      bytesArray[i] = toByte(_f);
      i = i + 1;
      bytesArray[i] = toByte(_l);
    }
    return string(bytesArray);
  }

  function toByte(uint8 _uint8) public pure returns (bytes1) {
    if (_uint8 < 10) {
      return bytes1(_uint8 + 48);
    } else {
      return bytes1(_uint8 + 87);
    }
  }
}
