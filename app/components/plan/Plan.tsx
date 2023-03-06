import { display } from "@/app/types/type";
import { planCardsData } from "@/app/utils/data";
import { StoreContext } from "@/app/utils/store";
import { Switch, Tab } from "@headlessui/react";
import clsx from "clsx";
import React, { useContext, useState } from "react";
import FormButton from "../FormButton";
import Title from "../Title";
import PlanCard, { PlanCardProps } from "./PlanCard";
import SwitchLabel from "./SwitchLabel";

const Plan = () => {
  const {
    planStepState: { value: planStep, setter: setPlanStep },
  } = useContext(StoreContext);
  const [enabled, setEnabled] = useState(planStep.plan === display.YEARLY);

  function changeCardsDisplay(display: PlanCardProps["display"]) {
    planCardsData.map((card) => (card.display = display));
  }

  function enableSwitch(enabled: boolean) {
    changeCardsDisplay(enabled ? display.YEARLY : display.MONTHLY);
    setPlanStep({
      ...planStep,
      plan: enabled ? display.YEARLY : display.MONTHLY,
    });
    setEnabled(enabled);
  }

  return (
    <div className="flex h-full w-full flex-col">
      <div className="flex h-full flex-col md:mx-auto">
        <Title
          title="Select your plan"
          subTitle="You have the option of monthly or yearly billing."
        />
        <div className="flex-grow space-y-6 md:space-y-8">
          <Tab.Group
            defaultIndex={planCardsData.findIndex(
              (plan) => plan.code === planStep.code
            )}
            onChange={(index) => {
              setPlanStep({
                ...planStep,
                code: index,
              });
            }}
          >
            <Tab.List className="flex flex-col space-y-3 md:block md:space-y-0 md:space-x-4">
              {planCardsData.map((card) => (
                <Tab key={card.code} className="focus:outline-none">
                  {({ selected }) => (
                    <PlanCard key={card.code} {...card} selected={selected} />
                  )}
                </Tab>
              ))}
            </Tab.List>
          </Tab.Group>
          <div className="flex">
            <div className="inline-flex flex-grow justify-center space-x-6 rounded-lg bg-blue-50 p-4">
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
        <FormButton previous={true} next={true} />
      </div>
    </div>
  );
};

export default Plan;
