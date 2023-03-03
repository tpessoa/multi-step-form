export type PersonalStepForm = {
  name: string;
  email: string;
  phoneNumber: string;
};

export type PlanStepForm = {
  name: string;
  plan: display;
  price: number;
};

export enum display {
  MONTHLY = "monthly",
  YEARLY = "yearly",
}
