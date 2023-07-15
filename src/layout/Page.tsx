import React from "react";

interface MainPageProps {
  children: JSX.Element[] | JSX.Element;
  bgColor?: string;
}

function Page({ bgColor, children }: MainPageProps) {
  const bacgrkoundColor = bgColor ?? "";
  return (
    <div
      className={`${bacgrkoundColor} container grid md:grid-cols-12 gap-x-6 mx-auto`}
    >
      {children}
    </div>
  );
}

export default Page;
