import { display } from "@/app/types/type";
import { StoreContext } from "@/app/utils/store";
import clsx from "clsx";
import React, { useContext, useState } from "react";

export type AddOnCardProps = {
  name: string;
  description: string;
  monthly: {
    price: number;
  };
  yearly: {
    price: number;
  };
};

const AddOnCard = ({ name, description, monthly, yearly }: AddOnCardProps) => {
  const {
    planStepState: { value: planStep },
    addOnStepState: { value: addOnStep, setter: setAddOnStep },
  } = useContext(StoreContext);
  const [active, setActive] = useState(false);

  let price = monthly.price;
  let priceFormatted = `+$${price}/mo`;
  if (planStep.plan === display.YEARLY) {
    price = yearly.price;
    priceFormatted = `+$${price}/yr`;
  }

  function addOnClickHandler(active: boolean) {
    let addOnStepCopy = [...addOnStep];
    if (active) {
      addOnStepCopy.push({ name, price });
    } else {
      addOnStepCopy = addOnStepCopy.filter((addOn) => addOn.name !== name);
    }
    setAddOnStep(addOnStepCopy);
    setActive(active);
  }

  return (
    <div
      className={clsx(
        "flex space-x-6 rounded-lg border px-4 py-4 text-gray-400 hover:border-blue-900",
        active && "border-blue-900 bg-blue-50"
      )}
    >
      <div className="flex items-center">
        <input
          checked={active}
          onChange={() => addOnClickHandler(!active)}
          type="checkbox"
          className={clsx(
            "h-4 w-4 rounded p-1 accent-indigo-600 hover:cursor-pointer hover:accent-indigo-500",
            active && "opacity-100",
            !active && "opacity-40"
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
