import React from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderMenuItemProps {
  text: string;
  path: string;
}

function HeaderMenuItem({ text, path }: HeaderMenuItemProps) {
  const location = useLocation();

  const selected =
    path === location.pathname
      ? " border font-medium"
      : "hover:text-retro-green border border-transparent ";

  return (
    <Link
      to={path}
      className={`${selected} font-semibold text-md rounded-full px-4 py-2 no-highlights justify-self-end lg:flex-grow block mt-4 lg:inline-block lg:mt-0 text-teal-200  `}
    >
      {text}
    </Link>
  );
}

export default HeaderMenuItem;
