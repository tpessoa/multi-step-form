"use client";

import { useContext } from "react";
import AddOns from "./components/add-ons/AddOns";
import Final from "./components/final/Final";
import Personal from "./components/info/Personal";
import Plan from "./components/plan/Plan";
import Stepper from "./components/stepper/Stepper";
import Summary from "./components/summary/Summary";
import { StoreContext } from "./utils/store";

export default function Home() {
  const {
    currentStepState: { value: currentStep },
  } = useContext(StoreContext);

  let step = <Personal />;
  if (currentStep === 1) {
    step = <Plan />;
  } else if (currentStep === 2) {
    step = <AddOns />;
  } else if (currentStep === 3) {
    step = <Summary />;
  } else if (currentStep === 4) {
    step = <Final />;
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="container flex h-full max-w-4xl flex-col rounded-xl md:inline-flex md:h-3/5 md:flex-row md:bg-white md:p-4">
        <div className="block">
          <Stepper />
        </div>
        <div className="h- absolute top-24 left-1/2 w-11/12 -translate-x-1/2 transform rounded-xl bg-white p-8 md:static md:left-0 md:top-0 md:w-full md:translate-x-0 md:rounded-none md:px-10">
          {step}
        </div>
      </div>
    </div>
  );
}
