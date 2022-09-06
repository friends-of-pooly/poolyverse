/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ISVGRender, ISVGRenderInterface } from "../ISVGRender";

const _abi = [
  {
    inputs: [
      {
        internalType: "bytes",
        name: "input",
        type: "bytes",
      },
    ],
    name: "render",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ISVGRender__factory {
  static readonly abi = _abi;
  static createInterface(): ISVGRenderInterface {
    return new utils.Interface(_abi) as ISVGRenderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ISVGRender {
    return new Contract(address, _abi, signerOrProvider) as ISVGRender;
  }
}
