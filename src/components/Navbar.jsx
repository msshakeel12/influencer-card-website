import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { close, logo1, menu } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
    <Link to="/">
      <img src={logo1} alt="hoobank" className="w-[250px] h-[52px]" />
    </Link>
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] text-white mr-10`}
          >
             <Link to={nav.id === 'home' ? '/' : `/${nav.id}`}>{nav.title}</Link>
          </li>
        ))}
      </ul>
      {/* ... */}
    </nav>
  );
};

export default Navbar;