import React from "react";

const FormButton = () => {
  return (
    <div className="flex justify-end absolute bottom-0 right-0 w-full">
      <button
        type="submit"
        className="bottom-0 bg-blue-900 text-white px-5 py-2 rounded-lg"
      >
        Next step
      </button>
    </div>
  );
};

export default FormButton;
