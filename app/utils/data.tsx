import { AddOnCardProps } from "../components/add-ons/AddOnCard";
import { PlanCardProps } from "../components/plan/PlanCard";
import { display } from "../types/type";

export const planCardsData: PlanCardProps[] = [
  {
    icon: "icon-arcade.svg",
    name: "Arcade",
    monthly: { price: 9 },
    yearly: {
      freeMonths: 2,
      price: 90,
    },
    display: display.MONTHLY,
    selected: false,
  },
  {
    icon: "icon-advanced.svg",
    name: "Advanced",
    monthly: { price: 12 },
    yearly: {
      freeMonths: 2,
      price: 120,
    },
    display: display.MONTHLY,
    selected: true,
  },
  {
    icon: "icon-pro.svg",
    name: "Pro",
    monthly: { price: 15 },
    yearly: {
      freeMonths: 2,
      price: 150,
    },
    display: display.MONTHLY,
    selected: false,
  },
];

export const addOnCardsData: AddOnCardProps[] = [
  {
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
