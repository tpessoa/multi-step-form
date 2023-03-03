import React from "react";

type TitleProps = {
  title: string;
  subTitle: string;
};

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <div className="w-full space-y-2 text-left">
      <div className="text-3xl font-extrabold text-blue-900 tracking-wide">
        {title}
      </div>
      <div className="text-sm text-gray-400/80">{subTitle}</div>
    </div>
  );
};

export default Title;
