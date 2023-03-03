import clsx from "clsx";
import React from "react";

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

export default SwitchLabel;
