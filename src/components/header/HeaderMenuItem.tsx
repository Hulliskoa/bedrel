import React from "react";
import { Link } from "react-router-dom";

interface HeaderMenuItemProps {
  text: string;
  path: string;
}

function HeaderMenuItem({ text, path }: HeaderMenuItemProps) {
  return (
    <Link
      to={path}
      className='text-sm no-highlights justify-self-end lg:flex-grow block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:border-b-2 hover:text-retro-green'
    >
      {text}
    </Link>
  );
}

export default HeaderMenuItem;
