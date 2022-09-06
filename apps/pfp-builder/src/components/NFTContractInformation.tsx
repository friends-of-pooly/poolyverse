import * as React from "react";
import classNames from "classnames";
import SVGOpenSeaWhite from "./SVG/SVGOpenSeaWhite";
// import PixelPooly from "@poolyverse/core-sol/deployments/mainnet/PixelPooly.json";

interface NFTContractInformationProps {
  className?: string;
}

export const NFTContractInformation = ({
  className,
}: NFTContractInformationProps) => {
  const containerClassName = classNames(
    className,
    "NFTContractInformation",
    "flex items-center "
  );
  return (
    <div className={containerClassName}>
      <a
        className="mr-2"
        target={"_blank"}
        href={`https://opensea.io/collection/PixelPooly`}
      >
        <SVGOpenSeaWhite className="w-5" />
      </a>
      <span className="tag tag-cloud">
        Total Supply:{"0"}
        {/* <ERC721TotalSupply className="mx-2" contractAddress={PixelPooly.address} /> */}
      </span>
    </div>
  );
};

export default NFTContractInformation;
