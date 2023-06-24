import React from "react";

interface MainPageProps {
  children: JSX.Element;
}

function MainPage({ children }: MainPageProps) {
  return <div className='container mx-auto px-10 lg:px-60    font-poppins'>{children}</div>;
}

export default MainPage;
