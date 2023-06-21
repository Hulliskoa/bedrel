import React from "react";

interface MainPageProps {
  children: JSX.Element;
}

function Page({ children }: MainPageProps) {
  return <div >{children}</div>;
}

export default Page;
