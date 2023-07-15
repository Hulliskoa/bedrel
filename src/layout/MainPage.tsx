import React from "react";

interface MainPageProps {
  children: JSX.Element;
}

function MainPage({ children }: MainPageProps) {
  return <div className='font-poppins mt-32'>{children}</div>;
}

export default MainPage;
