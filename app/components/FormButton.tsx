import React, { useContext } from "react";
import { StoreContext } from "../utils/store";

type FormButtonProps = {
  previous: boolean;
  next: boolean;
  confirm?: boolean;
  beforeChangingStep?: () => Promise<boolean | undefined>;
};

const FormButton = ({
  previous,
  next,
  confirm,
  beforeChangingStep,
}: FormButtonProps) => {
  const {
    currentStepState: { value: currentStep, setter: setCurrentStep },
  } = useContext(StoreContext);

  return (
    <div className="mt-10 flex w-full justify-between md:mt-0">
      {previous ? (
        <button
          className="rounded-lg px-5 py-2 font-normal text-gray-400/80"
          onClick={() => {
            setCurrentStep(currentStep - 1);
          }}
        >
          Go back
        </button>
      ) : (
        <div className="block"></div>
      )}
      {next && (
        <button
          type="submit"
          className="rounded-lg bg-blue-800 px-5 py-2 text-white hover:bg-blue-900"
          onClick={async () => {
            if (beforeChangingStep) {
              if (await beforeChangingStep?.()) {
                setCurrentStep(currentStep + 1);
              }
            } else {
              setCurrentStep(currentStep + 1);
            }
          }}
        >
          Next step
        </button>
      )}
      {confirm && (
        <button
          type="submit"
          className="rounded-lg bg-blue-800 px-5 py-2 text-white hover:bg-indigo-700"
          onClick={() => {
            setCurrentStep(currentStep + 1);
          }}
        >
          Confirm
        </button>
      )}
    </div>
  );
};

export default FormButton;
