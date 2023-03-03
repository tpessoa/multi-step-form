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
    <div className="h-full w-60 rounded-xl bg-sidebar-desktop bg-cover bg-bottom">
      <div className="flex-row space-y-8 px-8 py-7">
        {STEPS.map((step, index) => (
          <Tab
            key={index}
            number={index + 1}
            name={step}
            selected={index === currentStep}
          />
        ))}
      </div>
    </div>
  );
};

export default Stepper;
