import React from "react";
import { Link, useLocation } from "react-router-dom";

interface HeaderMenuItemProps {
  text: string;
  path: string;
}

function HeaderMenuItem({ text, path }: HeaderMenuItemProps) {
  const location = useLocation();

  const selected =
    path === location.pathname ? "selected-header-button border-b" : "custom-header-button-hover";

  return (
    <Link
      to={path}
      className={`${selected} font-semibold text-md px-6 py-2 no-highlights justify-self-end block  lg:mt-0`}
    >
      {text}
    </Link> 
  );
}

export default HeaderMenuItem;
