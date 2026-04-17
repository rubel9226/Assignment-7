import React from "react";
import { RiMenu2Fill } from "react-icons/ri";
import { Link, NavLink } from "react-router";
import { RiHome2Line } from "react-icons/ri";
import { MdOutlineWatchLater } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";

const Navbar = () => {
  return (
    <div className="bg-base-100 shadow-sm">

      <div className="navbar container mx-auto flex">

        <div className="flex justify-between w-full">
            <div className="navbar-start">
                <Link to={'/'} className="gap-0 text-3xl font-semibold cursor-pointer text-green-600"><span className="font-extrabold text-green-800">Keen</span>Keeper</Link>
            </div>

            <div className="justify-end hidden md:flex">
                
            <ul className="flex gap-2 px-1">
                <li className="font-bold">
                    <NavLink to={'/'} className={({isActive}) => `flex btn items-center ${isActive && ' bg-green-900 text-white'}`}><RiHome2Line className="text-xl" /> Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/time-line'} className={({isActive}) => `flex btn items-center ${isActive && 'bg-[#FFBB2B] text-white'}`}><MdOutlineWatchLater/> Timeline</NavLink> 
                </li>
                <li>
                    <NavLink to={'/stats'} className={({isActive}) => `flex btn items-center ${isActive && 'bg-[#00C49F] text-white'}`}><ImStatsDots /> Stats</NavLink>
                </li>
            </ul>
            </div>
        </div>

        <div className="dropdown justify-end">
            <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
              <RiMenu2Fill className="text-2xl" />
            </div>
            <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 right-0 shadow" >
              <li>
                <NavLink to={'/'} className={({isActive}) => `py-1 ${isActive ? ' bg-green-900 text-white font-semibold' : ""}`}><RiHome2Line className="text-xl" /> Home</NavLink>
              </li>
              <li>
                <NavLink to={'/time-line'} className={({isActive}) => `py-1 ${isActive ? 'bg-[#FFBB2B] text-white font-semibold' : ""}`}><MdOutlineWatchLater/> Timeline</NavLink>
              </li>
              <li>
                <NavLink to={'/stats'} className={({isActive}) => `py-1 ${isActive ? ' bg-[#00C49F] text-white font-semibold' : ""}`}><ImStatsDots /> Stats</NavLink>
              </li>
            </ul>
        </div>
      </div>

    </div>
  );
};

export default Navbar;
