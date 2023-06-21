import React from "react";

interface HeaderMenuItemProps {
  text: string;
}

function HeaderMenuItem({ text }: HeaderMenuItemProps) {
  return (
    <div className='text-sm  justify-self-end lg:flex-grow'>
      <a
        href='#responsive-header'
        className='block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:border-b-2 hover:text-grey-1'
      >
        {text}
      </a>
    </div>
  );
}

export default HeaderMenuItem;
