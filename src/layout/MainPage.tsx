import React from "react";

interface MainPageProps {
  children: JSX.Element;
}

function MainPage({ children }: MainPageProps) {
  return <div className=' container bg-dragonbreath font-poppins mt-32 mx-auto'>{children}</div>;
}

export default MainPage;
