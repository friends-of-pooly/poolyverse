/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  PoolyMorphRender,
  PoolyMorphRenderInterface,
} from "../PoolyMorphRender";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_svgLibrary_",
        type: "address",
      },
      {
        internalType: "address",
        name: "_svgRegistry_",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
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
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x6101006040527fe108be43dbedebdd6a5e12088e3ff0ee819db892baccf0fc636e26a2da6c252c6080527f790ef67b6749ebf7a55a8aa23a6703c0074d4b3c0bfb6d059ed0e60eda56b19c60a0527f3ba54d16c2760cee64730678daee75ed660ad1efc307e17ac6913d21e3a78ad160c0527f8e61819cc5eb2ef013ddeaf0d0f6670883c6e850752be10090757b338026713d60e0523480156100a157600080fd5b50604051610caf380380610caf8339810160408190526100c091610166565b6100c9336100fa565b600180546001600160a01b039384166001600160a01b03199182161790915560028054929093169116179055610199565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b80516001600160a01b038116811461016157600080fd5b919050565b6000806040838503121561017957600080fd5b6101828361014a565b91506101906020840161014a565b90509250929050565b60805160a05160c05160e051610ade6101d1600039600061035f0152600060d301526000610322015260006101270152610ade6000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063316df61e14610051578063715018a61461007a5780638da5cb5b14610084578063f2fde38b1461009f575b600080fd5b61006461005f36600461077c565b6100b2565b6040516100719190610858565b60405180910390f35b6100826103cf565b005b6000546040516001600160a01b039091168152602001610071565b6100826100ad36600461086b565b6103e3565b60606000828060200190518101906100ca9190610894565b9050600061011e7f000000000000000000000000000000000000000000000000000000000000000060405160200161010a9061060f60f31b815260020190565b604051602081830303815290604052610461565b905060006101a27f00000000000000000000000000000000000000000000000000000000000000006040516024016101739060208082526009908201526818da185c9bd8dbd85b60ba1b604082015260600190565b60408051601f198184030181529190526020810180516001600160e01b0316632f28b77d60e01b1790526104e0565b90506101ac610513565b8261034c6101d660405180604001604052806004815260200163199a5b1b60e21b815250856105dd565b610212604051806040016040528060018152602001600f60fb1b815250604051806040016040528060018152602001600360fc1b8152506105dd565b61024e604051806040016040528060018152602001607960f81b815250604051806040016040528060018152602001600360fc1b8152506105dd565b610291604051806040016040528060058152602001640eed2c8e8d60db1b815250604051806040016040528060048152602001633130302560e01b8152506105dd565b6102d5604051806040016040528060068152602001651a195a59da1d60d21b815250604051806040016040528060048152602001633130302560e01b8152506105dd565b6040516020016102e99594939291906108b7565b60408051601f1981840301815260048352602483019091526020820180516001600160e01b031663171f295360e01b17905290610347907f0000000000000000000000000000000000000000000000000000000000000000906104e0565b610609565b6040805160ff88166020820152610385917f0000000000000000000000000000000000000000000000000000000000000000910161010a565b6040805180820190915260068152651e17b9bb339f60d11b60208201526040516020016103b69594939291906108b7565b6040516020818303038152906040529350505050919050565b6103d7610632565b6103e1600061068c565b565b6103eb610632565b6001600160a01b0381166104555760405162461bcd60e51b815260206004820152602660248201527f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160448201526564647265737360d01b60648201526084015b60405180910390fd5b61045e8161068c565b50565b600254604051633a68f5db60e01b81526060916001600160a01b031690633a68f5db906104949086908690600401610922565b600060405180830381865afa1580156104b1573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526104d99190810190610943565b9392505050565b60015460405163e9ae5c5360e01b81526060916001600160a01b03169063e9ae5c53906104949086908690600401610922565b60606040516020016105c9907f3c7376672077696474683d2234303022206865696768743d223430302220737481527f796c653d226261636b67726f756e643a2335343135363322200000000000000060208201527503b34b2bba137bc1e91181018101a1818101a181811160551b60398201527f786d6c6e733d22687474703a2f2f7777772e77332e6f72672f323030302f7376604f8201526203391160ed1b606f820152601f60f91b607282015260730190565b604051602081830303815290604052905090565b606082826040516020016105f29291906109ba565b604051602081830303815290604052905092915050565b60606104d9604051806040016040528060048152602001631c9958dd60e21b81525084846106dc565b6000546001600160a01b031633146103e15760405162461bcd60e51b815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015260640161044c565b600080546001600160a01b038381166001600160a01b0319831681178455604051919092169283917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e09190a35050565b6060838383866040516020016106f59493929190610a0f565b60405160208183030381529060405290509392505050565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f1916810167ffffffffffffffff8111828210171561074c5761074c61070d565b604052919050565b600067ffffffffffffffff82111561076e5761076e61070d565b50601f01601f191660200190565b60006020828403121561078e57600080fd5b813567ffffffffffffffff8111156107a557600080fd5b8201601f810184136107b657600080fd5b80356107c96107c482610754565b610723565b8181528560208385010111156107de57600080fd5b81602084016020830137600091810160200191909152949350505050565b60005b838110156108175781810151838201526020016107ff565b83811115610826576000848401525b50505050565b600081518084526108448160208601602086016107fc565b601f01601f19169290920160200192915050565b6020815260006104d9602083018461082c565b60006020828403121561087d57600080fd5b81356001600160a01b03811681146104d957600080fd5b6000602082840312156108a657600080fd5b815160ff811681146104d957600080fd5b600086516108c9818460208b016107fc565b8651908301906108dd818360208b016107fc565b86519101906108f0818360208a016107fc565b85519101906109038183602089016107fc565b84519101906109168183602088016107fc565b01979650505050505050565b82815260406020820152600061093b604083018461082c565b949350505050565b60006020828403121561095557600080fd5b815167ffffffffffffffff81111561096c57600080fd5b8201601f8101841361097d57600080fd5b805161098b6107c482610754565b8181528560208385010111156109a057600080fd5b6109b18260208301602086016107fc565b95945050505050565b600083516109cc8184602088016107fc565b603d60f81b908301908152601160f91b600182015283516109f48160028401602088016107fc565b61011160f51b60029290910191820152600401949350505050565b600f60fa1b815260008551610a2b816001850160208a016107fc565b600160fd1b6001918401918201528551610a4c816002840160208a016107fc565b808201915050601f60f91b8060028301528551610a70816003850160208a016107fc565b613c2f60f01b600393909101928301528451610a938160058501602089016107fc565b6005920191820152600601969550505050505056fea264697066735822122062aad71d3d428d902748a2d969adfd9e5be913587a900f1efb6b021c918339fd64736f6c634300080f0033";

type PoolyMorphRenderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PoolyMorphRenderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PoolyMorphRender__factory extends ContractFactory {
  constructor(...args: PoolyMorphRenderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "PoolyMorphRender";
  }

  deploy(
    _svgLibrary_: string,
    _svgRegistry_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<PoolyMorphRender> {
    return super.deploy(
      _svgLibrary_,
      _svgRegistry_,
      overrides || {}
    ) as Promise<PoolyMorphRender>;
  }
  getDeployTransaction(
    _svgLibrary_: string,
    _svgRegistry_: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _svgLibrary_,
      _svgRegistry_,
      overrides || {}
    );
  }
  attach(address: string): PoolyMorphRender {
    return super.attach(address) as PoolyMorphRender;
  }
  connect(signer: Signer): PoolyMorphRender__factory {
    return super.connect(signer) as PoolyMorphRender__factory;
  }
  static readonly contractName: "PoolyMorphRender";
  public readonly contractName: "PoolyMorphRender";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PoolyMorphRenderInterface {
    return new utils.Interface(_abi) as PoolyMorphRenderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PoolyMorphRender {
    return new Contract(address, _abi, signerOrProvider) as PoolyMorphRender;
  }
}
