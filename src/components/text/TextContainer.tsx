import React from "react";

interface TextContainerProps {
  children: JSX.Element[] | JSX.Element;
  title: string;
  colSpan?: string;
}

function TextContainer({ children, title, colSpan }: TextContainerProps) {
  return (
    <div className={`${colSpan ? `col-span-${colSpan}` : ""}`}>
      <div className='font-bold text-[30px]'>{title}</div>
      <div className='mt-1'>{children}</div>
    </div>
  );
}

export default TextContainer;
