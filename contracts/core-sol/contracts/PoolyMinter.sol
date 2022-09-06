//SPDX-License-Identifier: GPL-3.0
pragma solidity 0.8.15;

import { Ownable } from "@openzeppelin/contracts/access/Ownable.sol";
import { IERC20 } from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import { PoolyNFT } from "./PoolyNFT.sol";

interface IWETH {
  function deposit() external payable;

  function withdraw(uint256 wad) external;

  function transfer(address to, uint256 value) external returns (bool);
}

/**
 * @title PoolyMinter
 * @author Kames Geraghty
 */
contract PoolyMinter is Ownable {
  address public weth;

  function mint(address token, address to) external payable onlyOwner {
    PoolyNFT(token).mint(to);
  }

  function withdraw(uint256 amount) external onlyOwner {
    _safeTransferETHWithFallback(msg.sender, amount);
  }

  function _safeTransferETHWithFallback(address to, uint256 amount) internal {
    if (!_safeTransferETH(to, amount)) {
      IWETH(weth).deposit{ value: amount }();
      IERC20(weth).transfer(to, amount);
    }
  }

  function _safeTransferETH(address to, uint256 value) internal returns (bool) {
    (bool success, ) = to.call{ value: value, gas: 30_000 }(new bytes(0));
    return success;
  }
}
