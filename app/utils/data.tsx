import { AddOnCardProps } from "../components/add-ons/AddOnCard";
import { PlanCardProps } from "../components/plan/PlanCard";
import { AddOn, display, Plan } from "../types/type";

export const planCardsData: Plan[] = [
  {
    code: 0,
    name: "Arcade",
    icon: "icon-arcade.svg",
    display: display.MONTHLY,
    monthly: { price: 9 },
    yearly: {
      freeMonths: 2,
      price: 90,
    },
  },
  {
    code: 1,
    name: "Advanced",
    icon: "icon-advanced.svg",
    display: display.MONTHLY,
    monthly: { price: 12 },
    yearly: {
      freeMonths: 2,
      price: 120,
    },
  },
  {
    code: 2,
    name: "Pro",
    icon: "icon-pro.svg",
    display: display.MONTHLY,
    monthly: { price: 15 },
    yearly: {
      freeMonths: 2,
      price: 150,
    },
  },
];

export const addOnCardsData: AddOn[] = [
  {
    code: 0,
    name: "Online service",
    description: "Access to multiplayer games",
    monthly: {
      price: 1,
    },
    yearly: {
      price: 10,
    },
  },
  {
    code: 1,
    name: "Larger storage",
    description: "Extra 1TB of cloud save",
    monthly: {
      price: 2,
    },
    yearly: {
      price: 20,
    },
  },
  {
    code: 2,
    name: "Customizable profile",
    description: "Custom theme on your profile",
    monthly: {
      price: 2,
    },
    yearly: {
      price: 20,
    },
  },
];
