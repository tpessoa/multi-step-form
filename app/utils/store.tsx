import {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useState,
} from "react";
import {
  AddOnStepForm,
  display,
  PersonalStepForm,
  PlanStepForm,
} from "../types/type";

type State<T> = {
  value: T;
  setter: Dispatch<SetStateAction<T>>;
};

type StoreContext = {
  currentStepState: State<number>;
  personalStepState: State<PersonalStepForm>;
  planStepState: State<PlanStepForm>;
  addOnStepState: State<AddOnStepForm[]>;
};

export const StoreContext = createContext<StoreContext>({} as StoreContext); //just a dummy cast for initialization

const StoreProvider = ({ children }: PropsWithChildren) => {
  const [currentStep, setCurrentStep] = useState(4);
  const [personalStep, setPersonalStep] = useState<PersonalStepForm>({
    name: "",
    email: "",
    phoneNumber: "",
  });
  const [planStep, setPlanStep] = useState<PlanStepForm>({
    code: 0,
    plan: display.MONTHLY,
  });
  const [addOnStep, setAddOnStep] = useState<AddOnStepForm[]>([]);

  const store: StoreContext = {
    currentStepState: {
      value: currentStep,
      setter: setCurrentStep,
    },
    personalStepState: {
      value: personalStep,
      setter: setPersonalStep,
    },
    planStepState: {
      value: planStep,
      setter: setPlanStep,
    },
    addOnStepState: {
      value: addOnStep,
      setter: setAddOnStep,
    },
  };

  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};

export default StoreProvider;
