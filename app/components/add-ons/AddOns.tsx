import { AddOnStepForm } from "@/app/types/type";
import { addOnCardsData } from "@/app/utils/data";
import { StoreContext } from "@/app/utils/store";
import React, { useContext } from "react";
import FormButton from "../FormButton";
import Title from "../Title";
import AddOnCard from "./AddOnCard";

const AddOns = () => {
  const {
    addOnStepState: { value: addOnStep, setter: setAddOnStep },
  } = useContext(StoreContext);

  function addAddOn(addOn: AddOnStepForm) {
    setAddOnStep((current) => [...current, addOn]);
  }

  function removeAddOn(addOn: AddOnStepForm) {
    setAddOnStep((current) =>
      current.filter((currAddOn) => currAddOn.code != addOn.code)
    );
  }

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-full flex-col md:mx-auto">
        <Title
          title="Pick add-ons"
          subTitle="Add-ons help enhance your gaming experience."
        />
        <div className="flex-grow space-y-4 md:w-[400px]">
          {addOnCardsData.map((addOn) => (
            <AddOnCard
              key={addOn.code}
              {...addOn}
              addAddOn={(code) => addAddOn(code)}
              removeAddOn={(code) => removeAddOn(code)}
              selected={addOnStep.some(({ code }) => code === addOn.code)}
            />
          ))}
        </div>

        <FormButton previous={true} next={true} />
      </div>
    </div>
  );
};

export default AddOns;
