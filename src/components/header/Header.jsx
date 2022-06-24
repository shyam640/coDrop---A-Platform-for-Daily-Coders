import React from "react";
import logo from "../../assets/images/cross_circle.png";
import { BiTask } from "react-icons/bi";
import "./Header.css";
import Avatar from "../../assets/images/login_avatar.png";
// import useLocalStorage from 'use-local-storage';


const Header = () => {
  // const defaultDark = window.matchMedia('(prefers-color-scheme: light)').matches;
  // const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  // const switchTheme = () => {
  //   const newTheme = theme==='light' ? 'dark':'light';
  //   setTheme(newTheme);
  // }
  return (
    <header className="md:flex w-screen fixed z-50 pt-3 pb-1 px-5 bg-slate-200">
      {/* Desktop and Tablet view */}
      <div className="flex md:flex -my-1 w-full h-full items-center">
        <div className="flex pb-2 justify-center items-center gap-2">
          <img src={logo} className="w-8 object-covor" alt="logo" />
          <p className="text-headingColor text-xl font-extrabold">coDrop</p>
        </div>

        <div className="flex items-center gap-8 ml-auto">
          <ul className="flex items-center gap-4">
            <li className="nav-items text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Home
            </li>
            <li className="nav-items text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Library
            </li>
            <li className="nav-items text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Collab
            </li>
            <li className="nav-items text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              AI News
            </li>
            <li className="nav-items text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              About Us
            </li>
            <li className="nav-items text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer">
              Updates
            </li>
          </ul>

          <div className="relative flex items-center -top-2">
            <BiTask className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-1 w-4 h-4 rounded-full bg-cartNumBg flex items-center">
              <p className="text-xs my-1 mx-1.5 text-black font-semibold">1</p>
            </div>
          </div>

          <img
            src={Avatar}
            className="w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer"
            alt="avatar"
          />
        </div>

        <label class="relative inline-block w-[60px] h-[34px] m-3 -top-2">
          <input type="checkbox" class="opacity-0 w-0 h-0 peer border-2" />
          <span
            class="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-amber-300 transition-all duration-500
                 before:absolute before:content-[''] before:h-[26px] before:w-[26px] before:left-[4px] before:bottom-[4px] before:bg-white before:transition-all before:duration-500
                 after:absolute after:content-['&#9728;&#65039;'] after:left-[7px] after:text-xl after:bottom-[3px] after:transition-all after:duration-500
                 rounded-[34px] before:rounded-[50%]
                 peer-checked:bg-sky-700 peer-focus:shadow-lg peer-checked:before:translate-x-[26px] peer-checked:before:bg-black
                 peer-checked:after:content-['&#127769;']
                 peer-checked:after:translate-x-[26px] peer-checked:after:opacity-100 peer-checked:after:rotate-[360deg] 
                 "
          ></span>
        </label>
      </div>

      {/* Mobile Devices */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
