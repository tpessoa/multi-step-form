"use client";

import { StoreContext } from "@/app/utils/store";
import React, { useContext } from "react";
import Tab from "./Tab";

const STEPS = ["your info", "select plan", "add-ons", "summary"];

const Stepper = () => {
  const {
    currentStepState: { value: currentStep },
  } = useContext(StoreContext);

  function isSelected(index: number) {
    // Final step
    if (index === 3 && currentStep === 4) {
      return true;
    }
    return index === currentStep;
  }

  return (
    <div className="h-full w-full bg-sidebar-mobile bg-cover bg-bottom md:w-60 md:rounded-xl md:bg-sidebar-desktop">
      <div className="flex h-52 justify-center space-x-4 md:h-full md:flex-col md:justify-start md:space-x-0 md:space-y-8 md:px-8 md:py-7">
        {STEPS.map((step, index) => (
          <Tab
            key={index}
            number={index + 1}
            name={step}
            selected={isSelected(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Stepper;
