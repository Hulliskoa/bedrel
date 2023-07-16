import React, { useEffect, useState } from "react";
import HeaderMenuItem from "./HeaderMenuItem";
import { Link } from "react-router-dom";
import DropDown from "./DropDown";
import logoSymbol from "../icons/logoSymbol.png";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const handleScroll = () => {
    const position = window.scrollY;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`transition relative duration-500 ${
        scrollPosition > 0 ? "bg-white" : "bg-transparent"
      }`}
    >
      <nav className='flex items-center justify-between flex-wrap bg-teal-500 py-3 container mx-auto '>
        <div className='flex items-center flex-shrink-0 space-x-2'>
          <img className='h-10' alt='logo' src={logoSymbol} />
          <span className='font-poppins font-bold text-black text-md'>
            <Link to='/'>Bedre Læring</Link>
          </span>
        </div>
        <div className='block lg:hidden'>
          <DropDown />
        </div>
        <div className='hidden w-full gap-x-6  lg:flex lg:items-center lg:w-auto'>
          <HeaderMenuItem path='/program' text='Program' />
          <HeaderMenuItem path='/utstillere' text='Utstillere' />
          <HeaderMenuItem path='/info' text='Praktisk info' />
          <Link
            to='/pamelding'
            className=' bg-retro-green hover:bg-retro-green-shade-1 font-semibold border text-md rounded-full px-4 py-2 no-highlights justify-self-end lg:flex-grow block mt-4 lg:inline-block lg:mt-0 text-teal-200'
          >
            Påmelding
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Header;
