import React from "react";
import Image from "next/image";

const Final = () => {
  return (
    <div className="mx-auto flex h-full w-[440px] flex-col items-center justify-center">
      <Image src="icon-thank-you.svg" width={80} height={80} alt="thank-you" />
      <div className="mt-8 text-3xl font-extrabold text-blue-900">
        Thank you!
      </div>
      <div className="mt-6 w-full text-center text-gray-400/80">
        Thank for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </div>
    </div>
  );
};

export default Final;
