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
    <div className="flex h-full w-full items-center justify-center">
      <div className="container flex h-3/5 max-w-4xl rounded-xl bg-white p-4 md:inline-flex">
        <div className="block">
          <Stepper />
        </div>
        <div className="flex w-full justify-center px-10 py-8">{step}</div>
      </div>
    </div>
  );
}
