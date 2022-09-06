import * as React from "react";
import classNames from "classnames";
import { useModal } from "react-modal-hook";
import ModalSmall from "./Layout/Modal/ModalSmall";
interface ModalHowItWorksProps {
  children?: React.ReactNode;
  className?: string;
}

export const ModalHowItWorks = ({
  className,
  children,
}: ModalHowItWorksProps) => {
  const classes = classNames(
    className,
    "ModalHowItWorks cursor-pointer tag tag-cloud"
  );
  const [showModal, hideModal] = useModal(() => (
    <ModalSmall hideModal={hideModal}>
      <div className="card rounded-xl shadow-md p-8 h-full z-50 max-w-xl overflow-auto break-words content leading-6 text-xs">
        <pre className="">
          <h3 className="font-bold text-2xl">How It Works</h3>
          <p className="">
            The ERC721K PFP builder allows anyone to easily compose on-chain SVGs.
          </p>
        </pre>
      </div>
    </ModalSmall>
  ));

  return (
    <span onClick={showModal} className={classes}>
      {children}
    </span>
  );
};

export default ModalHowItWorks;
