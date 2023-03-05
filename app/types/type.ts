export type PersonalStepForm = {
  name: string;
  email: string;
  phoneNumber: string;
};

export enum display {
  MONTHLY = "monthly",
  YEARLY = "yearly",
}
export type PlanStepForm = {
  code: number;
  plan: display;
};

export type AddOnStepForm = {
  code: number;
};

export type Plan = {
  code: number;
  name: string;
  icon: any;
  display: display.MONTHLY | display.YEARLY;
  monthly: {
    price: number;
  };
  yearly: {
    freeMonths: number;
    price: number;
  };
};

export type AddOn = {
  code: number;
  name: string;
  description: string;
  monthly: {
    price: number;
  };
  yearly: {
    price: number;
  };
};
