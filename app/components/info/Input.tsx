import { useField } from "formik";
import React, { useState } from "react";
import clsx from "clsx";

type InputProps = {
  label: string;
  name: string;
};

const Input = ({ label, ...props }: InputProps) => {
  const [field, meta, helpers] = useField(props);

  return (
    <div className="relative flex-col w-full space-y-2 items-center justify-center text-blue-900">
      <div className="text-left font-semibold text-xs">{label}</div>
      <div className="w-full flex justify-start">
        <input
          {...field}
          {...props}
          className={clsx(
            "w-full px-3 py-2 font-semibold text-sm focus:outline-none rounded-lg border border-blue-900/20",
            meta.error && meta.touched && "border-red-600"
          )}
        />
      </div>

      {meta.touched && meta.error ? (
        <div className="absolute top-0 right-0 transform -translate-y-1/2  font-semibold text-xs text-red-600">
          {meta.error}
        </div>
      ) : null}
    </div>
  );
};

export default Input;
