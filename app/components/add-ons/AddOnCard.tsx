import { AddOn, AddOnStepForm, display } from "@/app/types/type";
import { StoreContext } from "@/app/utils/store";
import clsx from "clsx";
import React, { useContext, useState } from "react";

export type AddOnCardProps = AddOn & {
  addAddOn: (code: AddOnStepForm) => void;
  removeAddOn: (code: AddOnStepForm) => void;
  selected: boolean;
};

const AddOnCard = ({
  name,
  description,
  monthly,
  yearly,
  code,
  selected,
  addAddOn,
  removeAddOn,
}: AddOnCardProps) => {
  const {
    planStepState: { value: planStep },
  } = useContext(StoreContext);

  let price = monthly.price;
  let priceFormatted = `+$${price}/mo`;
  if (planStep.plan === display.YEARLY) {
    price = yearly.price;
    priceFormatted = `+$${price}/yr`;
  }

  function addOnSelectionHandler(active: boolean) {
    active ? addAddOn({ code }) : removeAddOn({ code });
  }

  return (
    <div
      className={clsx(
        "flex space-x-6 rounded-lg border px-4 py-4 text-gray-400 hover:border-blue-900",
        selected && "border-blue-900 bg-blue-50"
      )}
    >
      <div className="flex items-center">
        <input
          checked={selected}
          onChange={() => addOnSelectionHandler(!selected)}
          type="checkbox"
          className={clsx(
            "h-4 w-4 rounded p-1 accent-indigo-600 hover:cursor-pointer hover:accent-indigo-500",
            selected && "opacity-100",
            !selected && "opacity-40"
          )}
        />
      </div>

      <div className="block grow text-sm">
        <div className="font-semibold text-blue-900">{name}</div>
        <div className="text-gray-400/80">{description}</div>
      </div>
      <div className="my-auto text-sm text-blue-800">{priceFormatted}</div>
    </div>
  );
};

export default AddOnCard;
