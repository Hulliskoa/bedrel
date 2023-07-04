import React from "react";

interface MainPageProps {
  children: JSX.Element[] | JSX.Element;
  bgColor?: string;
}

function Page({ bgColor, children }: MainPageProps) {
  const bacgrkoundColor = bgColor ?? "";
  return (
    <div
      className={`${bacgrkoundColor} container grid md:grid-cols-4 gap-x-4  mx-auto px-10 lg:px-60`}
    >
      {children}
    </div>
  );
}

export default Page;
