import React from "react";
import PrimaryButton from "../primaryButton";
import HeaderMenuItem from "./HeaderMenuItem";

function Header() {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6'>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='font-semibold text-black text-xl tracking-tight'>
          Bedre Læring
        </span>
      </div>
      <div className='block lg:hidden'>
        <button className='flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white'>
          <svg
            className='fill-current h-3 w-3'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <title>Menu</title>
            <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
          </svg>
        </button>
      </div>
      <div className='w-full gap-x-10  block lg:flex lg:items-center lg:w-auto'>
        <HeaderMenuItem text='Program' />
        <HeaderMenuItem text='Informasjon' />
        <HeaderMenuItem text='Foredrag' />
        <HeaderMenuItem text='Påmelding' />
      </div>
    </nav>
  );
}

export default Header;
