import React from "react";

interface MainPageProps {
  children: JSX.Element[] | JSX.Element;
}

function MainPage({ children }: MainPageProps) {
  return <div className=' container bg-dragonbreath font-poppins px-4 pb-20 mt-14 mx-auto'>{children}</div>;
}

export default MainPage;
