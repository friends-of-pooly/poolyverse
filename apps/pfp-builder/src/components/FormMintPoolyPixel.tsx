import * as React from "react";
import { useForm, Controller } from "react-hook-form";
import Slider from "react-input-slider";
import classNames from "classnames";
import { useAccount, useContractRead, useContractWrite } from "wagmi";
import { utils } from "ethers";
import { useModal } from "react-modal-hook";
import ModalSmall from "./Layout/Modal/ModalSmall";
import PoolyPixel from "@poolyverse/deployments/deployments/localhost/PoolyPixel.json";
import PoolyMinter from "@poolyverse/deployments/deployments/localhost/PoolyMinter.json";
import Select from "react-select";

interface FormMintPoolyPixelProps {
  className?: string;
  defaults?: any;
  symbol?: string;
}

export const FormMintPoolyPixel = ({ className }: FormMintPoolyPixelProps) => {
  const ABICoder = new utils.AbiCoder();

  const [showModal, hideModal] = useModal(() => (
    <ModalSmall hideModal={hideModal}>
      <div className="card rounded-xl shadow-md p-8 h-full z-50 max-w-xl overflow-auto break-words content leading-6 text-xs"></div>
    </ModalSmall>
  ));

  const account = useAccount();

  const {
    control,
    register,
    watch,
    handleSubmit,
    formState: {},
  } = useForm({
    defaultValues: {
      head: { value: "1", label: "Cooly" },
      body: { value: "1", label: "Wings" },
      head_acc: { value: "0", label: "Big Brain" },
      body_acc: { value: "1", label: "Chain" },
      bg: { value: "0", label: "Water" },
    },
  });
  const watchAll = watch();

  const { write } = useContractWrite(
    {
      addressOrName: PoolyMinter.address,
      contractInterface: PoolyMinter.abi,
    },
    "mint",
    {
      args: [PoolyPixel.address, account?.data?.address],
    }
  );

  const { data } = useContractRead(
    {
      addressOrName: PoolyPixel.address,
      contractInterface: PoolyPixel.abi,
    },
    "preview",
    {
      args: [
        ABICoder.encode(
          ["uint8", "uint8", "uint8", "uint8", "uint8"],
          [
            watchAll.head.value,
            watchAll.body.value,
            watchAll.head_acc.value,
            watchAll.body_acc.value,
            watchAll.bg.value,
          ]
        ),
      ],
    }
  );

  const onSubmit = async (_data: any) => {
    console.log("writing");
    write();
  };

  const options = [
    { value: "1", label: "1" },
    { value: "2", label: "2" },
  ];

  const optionsHead = [
    { value: "11", label: "Select" },
    { value: "0", label: "Robot" },
    { value: "1", label: "Cooly" },
    { value: "2", label: "Redeyes" },
    { value: "3", label: "Eyepatch" },
    { value: "3", label: "Looking" },
    { value: "3", label: "Normal" },
    { value: "3", label: "Noun" },
    { value: "3", label: "Pigeon" },
    { value: "3", label: "Snake Eyes" },
    { value: "3", label: "Talk" },
  ];
  const optionsBody = [
    { value: "11", label: "Select" },
    { value: "0", label: "Robot" },
    { value: "1", label: "Wings" },
    { value: "2", label: "Bright" },
    { value: "2", label: "Legs Left" },
    { value: "2", label: "Legs Right" },
    { value: "2", label: "Sitting" },
    { value: "2", label: "Wings" },
    { value: "2", label: "Defender" },
  ];
  const optionsHeadAcc = [
    { value: "11", label: "Select" },
    { value: "0", label: "Big Brain" },
    { value: "1", label: "Baseball Hat Blue" },
    { value: "2", label: "Baseball Hat Green" },
    { value: "2", label: "Beanie Blue" },
    { value: "2", label: "Beanie Green" },
    { value: "2", label: "Cowboy Hat" },
    { value: "2", label: "Crown" },
    { value: "2", label: "Egghead" },
    { value: "2", label: "Joint" },
    { value: "2", label: "Love Letter" },
    { value: "2", label: "Monocle" },
    { value: "2", label: "Pipe" },
    { value: "2", label: "Top Hot" },
  ];
  const optionsBodyAcc = [
    { value: "11", label: "Select" },
    { value: "0", label: "Chain" },
    { value: "1", label: "Goggles" },
    { value: "2", label: "Cocktail" },
    { value: "2", label: "Defender Shield" },
    { value: "2", label: "Flamingo" },
    { value: "2", label: "Gavel" },
    { value: "2", label: "Noddle" },
    { value: "2", label: "Chain" },
    { value: "2", label: "Trophy" },
  ];
  const optionsBG = [
    { value: "0", label: "Blue" },
    { value: "1", label: "Stars" },
    { value: "2", label: "Night" },
    { value: "2", label: "Sand" },
    { value: "2", label: "Beach" },
    { value: "2", label: "Sky Blue" },
  ];

  const classes = classNames(
    className,
    "FormMintPoolyPixel",
    "grid grid-cols-12 gap-10"
  );
  const classesLabel = "text-xs font-semibold mb-1 block text-neutral-600";

  const FieldSelect = ({ name, label, options }: any) => {
    return (
      <div className="">
        <label className={classesLabel}>{label}</label>
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Select options={options} defaultValue={options[0]} {...field} />
          )}
        />
      </div>
    );
  };

  return (
    <>
      <div className={classes}>
        <div className="text-center z-5 relative col-span-8">
          <img className="rounded-xl shadow-lg mx-auto w-full" src={data} />
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="z-0 relative col-span-4 grid grid-cols-1 gap-2"
        >
          <FieldSelect name="head" label="Head" options={optionsHead} />
          <FieldSelect name="body" label="Body" options={optionsBody} />
          <FieldSelect
            name="head_acc"
            label="Head Accessory"
            options={optionsHeadAcc}
          />
          <FieldSelect
            name="body_acc"
            label="Body Accessory"
            options={optionsBodyAcc}
          />
          <FieldSelect name="bg" label="Background" options={optionsBG} />
          <button className="btn btn-purple btn-lg mt-3">Free PFP Download</button>
          <button className="btn btn-white btn-lg mt-3">Blockchain Mint</button>
        </form>
      </div>
    </>
  );
};

export default FormMintPoolyPixel;
