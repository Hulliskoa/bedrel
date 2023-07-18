import React from "react";

interface MainPageProps {
  children: JSX.Element[] | JSX.Element;
  bgColor?: string;
}

function Page({ bgColor, children }: MainPageProps) {
  const bacgrkoundColor = bgColor ?? "";
  return (
    <div

      className={`${bacgrkoundColor} container grid gap-y-4 snap-y md:gap-y-12 grid-cols-3 sm:grid-cols-6 md:grid-cols-12 gap-x-6`}
    >
      {children}
    </div>
  );
}

export default Page;
