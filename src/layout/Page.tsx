import React from "react";

interface MainPageProps {
  children: JSX.Element[] | JSX.Element;
}

function Page({ children }: MainPageProps) {
  return (
    <div className='grid md:grid-cols-4 gap-x-4 '>
      {children}
    </div>
  );
}

export default Page;
