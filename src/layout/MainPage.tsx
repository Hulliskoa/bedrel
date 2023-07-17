import React from "react";

interface MainPageProps {
  children: JSX.Element[] | JSX.Element;
}

function MainPage({ children }: MainPageProps) {
  return <div className=' container bg-dragonbreath font-poppins pb-20 mt-32 mx-auto'>{children}</div>;
}

export default MainPage;
