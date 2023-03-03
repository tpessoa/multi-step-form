import { Switch } from "@headlessui/react";
import clsx from "clsx";
import React, { useState } from "react";
import Title from "../Title";
import PlanCard, { PlanCardProps } from "./PlanCard";

const cards: PlanCardProps[] = [
  {
    icon: "icon-arcade.svg",
    name: "Arcade",
    monthly: { price: 9 },
    yearly: {
      freeMonths: 2,
      price: 90,
    },
    display: "monthly",
  },
  {
    icon: "icon-advanced.svg",
    name: "Advanced",
    monthly: { price: 12 },
    yearly: {
      freeMonths: 2,
      price: 120,
    },
    display: "monthly",
  },
  {
    icon: "icon-pro.svg",
    name: "Pro",
    monthly: { price: 15 },
    yearly: {
      freeMonths: 2,
      price: 150,
    },
    display: "monthly",
  },
];

const Plan = () => {
  const [enabled, setEnabled] = useState(false);

  function changeCardsDisplay(display: PlanCardProps["display"]) {
    cards.map((card) => (card.display = display));
  }

  function enableSwitch(enabled: boolean) {
    changeCardsDisplay(enabled ? "yearly" : "monthly");
    setEnabled(enabled);
  }

  return (
    <div className="relative h-full">
      <Title
        title="Select your plan"
        subTitle="You have the option of monthly or yearly billing."
      />
      <div className="inline-block space-y-8">
        <div className="mt-10 inline-flex space-x-4">
          {cards.map((card, index) => (
            <PlanCard key={index} {...card} />
          ))}
        </div>
        <div className="flex">
          <div className="inline-flex flex-grow justify-center space-x-6 rounded-lg bg-gray-100/50 p-4">
            <SwitchLabel label="Monthly" disabled={enabled} />
            <Switch
              checked={enabled}
              onChange={() => enableSwitch(!enabled)}
              className={clsx(
                "relative inline-flex h-6 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-blue-900 transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75",
                enabled && "bg-blue-900"
              )}
            >
              <span
                aria-hidden="true"
                className={clsx(
                  "pointer-events-none my-auto inline-block h-4 w-4 translate-x-1 transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out",
                  enabled && "translate-x-6"
                )}
              />
            </Switch>
            <SwitchLabel label="Yearly" disabled={!enabled} />
          </div>
        </div>
      </div>
    </div>
  );
};

type SwitchLabelProps = {
  label: string;
  disabled: boolean;
};
const SwitchLabel = ({ label, disabled }: SwitchLabelProps) => {
  return (
    <span
      className={clsx(
        "flex items-center justify-center text-sm font-semibold",
        disabled && "opacity-30"
      )}
    >
      {label}
    </span>
  );
};

export default Plan;
