import { display } from "@/app/types/type";
import { addOnCardsData, planCardsData } from "@/app/utils/data";
import { StoreContext } from "@/app/utils/store";
import React, { useContext } from "react";
import FormButton from "../FormButton";
import Title from "../Title";

const Summary = () => {
  const {
    planStepState: { value: planStep },
    addOnStepState: { value: addOnStep },
    currentStepState: { setter: setCurrentStep },
  } = useContext(StoreContext);

  const getCurrentPlanDisplay = planStep.plan === display.MONTHLY ? "mo" : "yr";
  const getPlanByCode = planCardsData.find(
    (elem) => elem.code === planStep.code
  )!;
  const getAddOnByCode = (code: number) =>
    addOnCardsData.find((elem) => elem.code === code)!;

  return (
    <div className="flex h-full w-full flex-col">
      <div className="mx-auto flex h-full flex-col">
        <Title
          title="Finishing up"
          subTitle="Double-check everthing looks OK before confirming."
        />
        <div className="w-[400px] flex-grow">
          <div className="rounded-md bg-indigo-50/50 p-6">
            <div className="flex justify-between text-sm font-bold text-blue-900">
              <div>
                <div>
                  {getPlanByCode.name}
                  <span className="capitalize"> ({planStep.plan})</span>
                </div>
                <button
                  className="font-normal text-gray-400/80 underline"
                  onClick={() => setCurrentStep(1)}
                >
                  Change
                </button>
              </div>
              <div className="my-auto">
                ${getPlanByCode[planStep.plan].price}/{getCurrentPlanDisplay}
              </div>
            </div>
            <hr className="my-4 px-2" />
            <div className="space-y-3">
              {addOnStep.map((addOn) => (
                <div
                  key={addOn.code}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="text-gray-400/80">
                    {getAddOnByCode(addOn.code).name}
                  </div>
                  <div className="text-blue-900">
                    +${getAddOnByCode(addOn.code)[planStep.plan].price}/
                    {getCurrentPlanDisplay}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-between px-6 py-2">
            <div className="text-sm text-gray-400/80">Total (per month)</div>
            <div className="text-md font-extrabold text-indigo-600">
              +$
              {addOnStep.reduce(
                (acc, curVal) =>
                  acc + getAddOnByCode(curVal.code)[planStep.plan].price,
                getPlanByCode[planStep.plan].price
              )}
              /{getCurrentPlanDisplay}
            </div>
          </div>
        </div>

        <FormButton previous={true} next={false} confirm={true} />
      </div>
    </div>
  );
};

export default Summary;
