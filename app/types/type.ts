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
  name: string;
  plan: display;
  price: number;
};

export type AddOnStepForm = {
  name: string;
  price: number;
};
