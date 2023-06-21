import React from "react";

interface MainPageProps {
  children: JSX.Element[] | JSX.Element;
}

function Page({ children }: MainPageProps) {
  return (
    <div className='grid grid-cols-4 gap-x-4 mx-10'>
      {children}
    </div>
  );
}

export default Page;
