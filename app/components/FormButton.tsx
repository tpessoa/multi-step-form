import { useFormikContext } from "formik";
import React, { useContext } from "react";
import { StoreContext } from "../utils/store";

const FormButton = () => {
  const {
    currentStepState: { value: currentStep, setter: setCurrentStep },
  } = useContext(StoreContext);

  return (
    <div className="absolute flex justify-between bottom-0 right-0 w-full">
      <button
        className="bottom-0 border-2 border-blue-900 text-blue-900 px-5 py-2 rounded-lg"
        onClick={() => {
          setCurrentStep(0);
        }}
      >
        Go back
      </button>
      <button
        type="submit"
        className="bottom-0 bg-blue-900 text-white px-5 py-2 rounded-lg"
        onClick={() => {
          setTimeout(() => {
            setCurrentStep(1);
          }, 1000);
        }}
      >
        Next step
      </button>
    </div>
  );
};

export default FormButton;
