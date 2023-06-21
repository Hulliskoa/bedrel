import React from "react";
import HeaderMenuItem from "./HeaderMenuItem";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";

function Header() {
  return (
    <nav className='flex items-center justify-between flex-wrap bg-teal-500 p-6 container mx-auto '>
      <div className='flex items-center flex-shrink-0 text-white mr-6'>
        <span className='font-poppins font-bold text-black text-xl tracking-tight'>
          <Link to='/'>Bedre Læring</Link>
        </span>
      </div>
      <div className='block lg:hidden'>
        <DropDown />
      </div>
      <div className='hidden w-full gap-x-10  lg:flex lg:items-center lg:w-auto'>
        <HeaderMenuItem path='/program' text='Program' />
        <HeaderMenuItem path='/info' text='Informasjon' />
        <HeaderMenuItem path='/foredrag' text='Foredrag' />
        <HeaderMenuItem path='/påmelding' text='Påmelding' />
      </div>
    </nav>
  );
}

export default Header;
