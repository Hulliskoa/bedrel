import React from "react";

interface MainPageProps {
  children: JSX.Element;
}

function MainPage({ children }: MainPageProps) {
  return <div className='container mx-auto px-4 font-poppins'>{children}</div>;
}

export default MainPage;
