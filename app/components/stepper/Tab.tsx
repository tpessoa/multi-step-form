import clsx from "clsx";
import React from "react";

type TabProps = {
  number: number;
  name: string;
  selected: boolean;
};

const Tab = ({ number, name, selected }: TabProps) => {
  return (
    <div className="w-full inline-flex space-x-4 items-center">
      <div
        className={clsx(
          "w-7 h-7 rounded-full flex border-sky-50 border justify-center items-center",
          selected && "bg-sky-200 border-0"
        )}
      >
        <span
          className={clsx(
            "text-xs font-bold text-white",
            selected && "text-black"
          )}
        >
          {number}
        </span>
      </div>
      <div>
        <div className="uppercase font-semibold text-xs text-gray-400/80">
          step {number}
        </div>
        <div className="uppercase font-semibold text-white text-xs tracking-widest">
          {name}
        </div>
      </div>
    </div>
  );
};

export default Tab;
