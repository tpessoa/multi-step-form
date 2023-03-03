import { display } from "@/app/types/type";
import { planCardsData } from "@/app/utils/data";
import { StoreContext } from "@/app/utils/store";
import { Switch, Tab } from "@headlessui/react";
import clsx from "clsx";
import React, { useContext, useState } from "react";
import Title from "../Title";
import PlanCard, { PlanCardProps } from "./PlanCard";
import SwitchLabel from "./SwitchLabel";

const Plan = () => {
  const [enabled, setEnabled] = useState(false);
  const {
    planStepState: { value: planStep, setter: setPlanStep },
  } = useContext(StoreContext);

  function changeCardsDisplay(display: PlanCardProps["display"]) {
    planCardsData.map((card) => (card.display = display));
  }

  function enableSwitch(enabled: boolean) {
    changeCardsDisplay(enabled ? display.YEARLY : display.MONTHLY);
    setEnabled(enabled);
  }
  const selectedPlanIndex =
    planCardsData.findIndex((plan) => plan.selected) ?? 0;

  return (
    <div>
      <Title
        title="Select your plan"
        subTitle="You have the option of monthly or yearly billing."
      />
      <div className="inline-block space-y-8">
        <Tab.Group
          defaultIndex={selectedPlanIndex}
          onChange={(index) => {
            const plan = enabled ? display.YEARLY : display.MONTHLY;
            setPlanStep({
              name: planCardsData[index].name,
              plan: plan,
              price: planCardsData[index][plan].price,
            });
          }}
        >
          <Tab.List className="mt-10 inline-flex space-x-4">
            {planCardsData.map((card, index) => (
              <Tab key={index} className="focus:outline-none">
                {({ selected }) => (
                  <PlanCard key={index} {...card} selected={selected} />
                )}
              </Tab>
            ))}
          </Tab.List>
        </Tab.Group>
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

export default Plan;
