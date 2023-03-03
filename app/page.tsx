"use client";

import { useContext } from "react";
import Personal from "./components/info/Personal";
import Plan from "./components/plan/Plan";
import Stepper from "./components/stepper/Stepper";
import { StoreContext } from "./utils/store";

export default function Home() {
  const {
    currentStepState: { value: currentStep },
  } = useContext(StoreContext);

  let step = <Personal />;
  if (currentStep === 1) {
    step = <Plan />;
  }

  return (
    <div className="flex justify-center items-center w-full h-full">
      <div className="flex w-11/12 md:inline-flex h-3/5 bg-white rounded-xl p-4">
        <Stepper />
        <div className="flex-grow px-10 py-8">{step}</div>
      </div>
    </div>
  );
}
