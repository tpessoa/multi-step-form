"use client";

import { StoreContext } from "@/app/utils/store";
import React, { useContext } from "react";
import Tab from "./Tab";

const STEPS = ["your info", "select plan", "add-ons", "summary"];

const Stepper = () => {
  const {
    currentStepState: { value: currentStep },
  } = useContext(StoreContext);
  return (
    <div className="w-56 bg-cover bg-sidebar-desktop rounded-xl flex">
      <div className="flex-row space-y-8 px-8 py-7">
        {STEPS.map((step, index) => (
          <Tab
            key={index}
            number={index + 1}
            name={STEPS[index]}
            selected={index === currentStep}
          />
        ))}
      </div>
    </div>
  );
};

export default Stepper;
