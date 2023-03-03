import { clsx } from "clsx";
import Image from "next/image";
import React from "react";

export type PlanCardProps = {
  icon: any;
  name: string;
  monthly: {
    price: number;
  };
  yearly: {
    freeMonths: number;
    price: number;
  };
  display: "monthly" | "yearly";
};

const PlanCard = ({ icon, name, monthly, yearly, display }: PlanCardProps) => {
  let price = `${monthly.price}/mo`;
  let freeMonths;
  if (display === "yearly") {
    price = `${yearly.price}/yr`;
    freeMonths = `${yearly.freeMonths}`;
  }

  return (
    <div
      className={clsx("w-32 space-y-12 rounded-xl border p-3 text-gray-400/80")}
    >
      <Image src={icon} width={42} height={42} alt={name} />
      <div className="space-y-1">
        <div className="text-sm font-semibold text-blue-900">{name}</div>
        <div className="text-sm text-gray-400/80">{price}</div>
        {freeMonths && (
          <div className="text-xs text-blue-800">{freeMonths} months free</div>
        )}
      </div>
    </div>
  );
};

export default PlanCard;
