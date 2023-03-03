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
