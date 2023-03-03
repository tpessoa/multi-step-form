import { addOnCardsData } from "@/app/utils/data";
import React from "react";
import Title from "../Title";
import AddOnCard from "./AddOnCard";

const AddOns = () => {
  return (
    <div className="">
      <Title
        title="Pick add-ons"
        subTitle="Add-ons help enhance your gaming experience."
      />
      <div className="block w-[400px] space-y-4">
        {addOnCardsData.map((addOn, index) => (
          <AddOnCard key={index} {...addOn} />
        ))}
      </div>
    </div>
  );
};

export default AddOns;
