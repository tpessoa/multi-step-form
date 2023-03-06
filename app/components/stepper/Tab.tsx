import clsx from "clsx";
import React from "react";

type TabProps = {
  number: number;
  name: string;
  selected: boolean;
};

const Tab = ({ number, name, selected }: TabProps) => {
  return (
    <div className="mt-6 inline-flex space-x-4 md:mt-0 md:w-full md:items-center">
      <div
        className={clsx(
          "flex h-7 w-7 items-center justify-center rounded-full border border-sky-50",
          selected && "border-0 bg-sky-200"
        )}
      >
        <span
          className={clsx(
            "text-xs font-bold",
            !selected && "text-white",
            selected && "text-black"
          )}
        >
          {number}
        </span>
      </div>
      <div className="hidden md:block">
        <div className="text-xs font-semibold uppercase text-gray-400/80">
          step {number}
        </div>
        <div className="text-xs font-semibold uppercase tracking-widest text-white">
          {name}
        </div>
      </div>
    </div>
  );
};

export default Tab;
