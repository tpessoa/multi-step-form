import React from "react";

type TitleProps = {
  title: string;
  subTitle: string;
};

const Title = ({ title, subTitle }: TitleProps) => {
  return (
    <div className="space-y-2 text-left">
      <h2 className="text-3xl font-extrabold tracking-wide text-blue-900">
        {title}
      </h2>
      <h3 className="text-sm text-gray-400/80">{subTitle}</h3>
    </div>
  );
};

export default Title;
