import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import { PersonalStepForm } from "../types/type";

type State<T> = {
  value: T;
  setter: Dispatch<SetStateAction<T>>;
};

type StoreContext = {
  currentStepState: State<number>;
  personalStepState: State<PersonalStepForm>;
};

export const StoreContext = createContext<StoreContext>({} as StoreContext); //just a dummy cast for initialization

const StoreProvider = ({ children }: PropsWithChildren) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [personalStep, setPersonalStep] = useState<PersonalStepForm>({
    name: "",
    email: "",
    phoneNumber: "",
  });

  const store: StoreContext = {
    currentStepState: {
      value: currentStep,
      setter: setCurrentStep,
    },
    personalStepState: {
      value: personalStep,
      setter: setPersonalStep,
    },
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
