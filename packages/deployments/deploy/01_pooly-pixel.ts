import { utils } from "ethers";
import { HardhatRuntimeEnvironment } from "hardhat/types";
import svg1 from '../svg/pixel/head-pooly-cooly'
import svg2 from '../svg/pixel/body-pooly-wings'
import svg3 from '../svg/pixel/head-accessory-snorkel-blue'
import svg4 from '../svg/pixel/body-accessory-unicron'

import bg0 from '../svg/pixel/bg-0'
import bg1 from '../svg/pixel/bg-1'

import head_bot from '../svg/pixel/head-bot'
import head_pooly_cooly from '../svg/pixel/head-pooly-cooly'
import head_pooly_redeyes from '../svg/pixel/head-pooly-redeyes'

import body_pooly_bot from '../svg/pixel/body-pooly-bot'
import body_pooly_wings from '../svg/pixel/body-pooly-wings'


export default async function deploy(hardhat: HardhatRuntimeEnvironment) {
    const { deployments, getNamedAccounts, ethers } = hardhat;

    const { deploy } = deployments;
    const { deployer } = await getNamedAccounts();

    const SVGRegistry = await deployments.get("SVGRegistry");
    const SVGLibrary = await deployments.get("SVGLibrary");

    const svgRegistry = await ethers.getContractAt("SVGRegistry", SVGRegistry.address);
    
    const PoolyPixelSvgModule = await deploy("PoolyPixelSvgModule", {
      contract: "PoolyPixelSvgModule",
      from: deployer,
      args: [SVGLibrary.address],
      skipIfAlreadyDeployed: false,
      log: true,
    });

    const poolyPixel = await ethers.getContractAt("PoolyPixelSvgModule", PoolyPixelSvgModule.address);
    poolyPixel.setElement(0, 0, head_bot);
    poolyPixel.setElement(0, 1, head_pooly_cooly);
    poolyPixel.setElement(0, 2, head_pooly_redeyes);
    poolyPixel.setElement(1, 0, body_pooly_bot);
    poolyPixel.setElement(1, 1, body_pooly_wings);
    poolyPixel.setElement(2, 0, svg3);
    poolyPixel.setElement(3, 0, svg4);
    poolyPixel.setElement(4, 0, bg0);
    poolyPixel.setElement(4, 1, bg1);

    await svgRegistry.setWidget("0x464f554e44455200000000000000000000000000000000000000000000000000", PoolyPixelSvgModule.address);

    const PoolyPixelRender = await deploy("PoolyPixelRender", {
      contract: "PoolyPixelRender",
      from: deployer,
      args: [SVGLibrary.address, SVGRegistry.address],
      skipIfAlreadyDeployed: false,
      log: true,
    });
    
    const PoolyPixelTraits = await deploy("PoolyPixelTraits", {
      contract: "PoolyPixelTraits",
      from: deployer,
      args: [],
      skipIfAlreadyDeployed: false,
      log: true,
    });

    const contactInformation = {
      name: "PoolyPixel",
      description: "PoolyDefender.",
      image: "",
      externalLink: "https://PoolyPixel.art",
      sellerFeeBasisPoints: "0",
      feeRecipient: "0x0000000000000000000000000000000000000000",
    };

    const PoolyPixelStorage = await deploy("PoolyPixelStorage", {
      contract: "PoolyPixelStorage",
      from: deployer,
      args: [PoolyPixelRender.address, PoolyPixelTraits.address, contactInformation],
      skipIfAlreadyDeployed: false,
      log: true,
    });
    

    const PoolyPixel = await deploy("PoolyPixel", {
      contract: "PoolyNFT",
      from: deployer,
      args: ["Pooly Pixel", "BIRBI", PoolyPixelStorage.address, deployer],
      skipIfAlreadyDeployed: false,
      log: true,
    });
    
    const PoolyMinter = await deploy("PoolyMinter", {
      contract: "PoolyMinter",
      from: deployer,
      args: [],
      skipIfAlreadyDeployed: false,
      log: true,
    });
    
    const pooly = await ethers.getContractAt("PoolyNFT", PoolyPixel.address);
    await pooly.setMinter(PoolyMinter.address);
}
