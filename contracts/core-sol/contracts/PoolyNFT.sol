//SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.15;

import { ERC721K } from "@erc721k/core-sol/contracts/ERC721K.sol";
import { ERC721Storage } from "@erc721k/core-sol/contracts/ERC721Storage.sol";
import { ISVGRender } from "./interfaces/ISVGRender.sol";

/**
 * @title PoolyNFT
 * @author Kames Geraghty
 */
contract PoolyNFT is ERC721K {
  address private _minter;

  /**
   * @notice Pooly Construction
   * @param name string - Name of ERC721 token
   * @param symbol string - Symbol of ERC721 token
   * @param erc721Storage address - ERC721Storage instance
   */
  constructor(
    string memory name,
    string memory symbol,
    address erc721Storage,
    address minter
  ) ERC721K(name, symbol, erc721Storage) {
    _minter = minter;
  }

  modifier onlyMinter() {
    require(_msgSender() == _minter, "PoolyNFT:minting-unauthorized");
    _;
  }

  /* ===================================================================================== */
  /* External Functions                                                                    */
  /* ===================================================================================== */

  // --------------------------------------
  // READS
  // --------------------------------------

  function preview(bytes memory input) external view returns (string memory) {
    return ISVGRender(ERC721Storage(_erc721Storage).getSvgRender()).render(input);
  }

  // --------------------------------------
  // WRITES
  // --------------------------------------

  /**
   * @notice Mints a new token to the given address
   * @param to address - Address to mint to`
   */
  function mint(address to) external onlyMinter {
    unchecked {
      _mint(to, _idCounter++);
    }
  }

  function transferFrom(
    address from,
    address to,
    uint256 tokenId
  ) public virtual override {
    super.transferFrom(from, to, tokenId);
  }

  function setMinter(address minter) external onlyOwner {
    _minter = minter;
  }

  /* ===================================================================================== */
  /* Internal Functions                                                                    */
  /* ===================================================================================== */

  function _tokenData(uint256 tokenId)
    internal
    view
    virtual
    override
    returns (bytes memory, bytes memory)
  {
    bytes memory ensNode = bytes(abi.encode("0x0"));
    bytes memory ownerEncoded_ = bytes(abi.encode(ownerOf(tokenId)));
    return (ensNode, ownerEncoded_);
  }

  function _issue(address _to, uint256 _tokenId) internal returns (uint256) {
    _mint(_to, _tokenId);
    return _tokenId;
  }
}
