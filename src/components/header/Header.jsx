import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/cross_circle.png";
import { motion } from "framer-motion";
// Icons
import { BiTask, BiHomeAlt } from "react-icons/bi";
import { FiLogOut } from "react-icons/fi";
import { MdLocalLibrary } from "react-icons/md";
import { FcCollaboration } from "react-icons/fc";
import { GiNewspaper } from "react-icons/gi";
import { RiTeamFill, RiDashboardFill } from "react-icons/ri";
import { GrUpdate } from "react-icons/gr";
import "./Header.css";
import Avatar from "../../assets/images/login_avatar.png";
// import useLocalStorage from 'use-local-storage';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../../firebase.config";
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

const Header = () => {
  // const defaultDark = window.matchMedia('(prefers-color-scheme: light)').matches;
  // const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');
  // const switchTheme = () => {
  //   const newTheme = theme==='light' ? 'dark':'light';
  //   setTheme(newTheme);
  // }

  const firebaseAuth = getAuth(app);
  const googleAuthProvider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();
  const [isMenu, setIsMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("#");
  // console.log(user);

  const login = async () => {
    // const response = await signInWithPopup(firebaseAuth, googleAuthProvider);
    // console.log(response);
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, googleAuthProvider);
      // console.log(user);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
      window.location.reload();
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
    window.location.reload();
  };

  return (
    <header className="w-screen fixed z-50 lg:pt-2 lg:px-5 p-2 bg-gradient-to-r from-yellow-300 to-red-400 shadow-lg shadow-textColor">
      {/* Desktop view */}
      <div className="hidden lg:flex w-auto items-center">
        <Link to={"/"} className="flex justify-center items-center gap-2">
          <img src={logo} className="w-12 object-cover hover:motion-safe:animate-spin" alt="logo" />
          <p className="text-gradientHover font-extrabold text-xl sm:text-4xl">
            coDrop
          </p>
        </Link>

        <div className="flex items-center xl:gap-5 lg:gap-2 xs:gap-0 ml-auto pr-5">
          <motion.ul
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 300 }}
            className="flex items-center gap-1.5 xl:gap-8 lg:gap-3"
          >
            <Link
              to={"/"}
              className="nav-items w-auto text-base p-2 rounded-lg hover:font-bold text-textColor hover:text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-200 transition-all ease-in-out cursor-pointer"
            >
              <BiHomeAlt />
              Home
            </Link>
            <Link
              to={"/library"}
              className="nav-items w-auto text-base p-2 rounded-lg hover:font-bold text-textColor hover:text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-300 transition-all ease-in-out cursor-pointer"
            >
              <MdLocalLibrary />
              Library
            </Link>
            <Link
              to={"/collab"}
              className="nav-items w-auto text-base p-2 rounded-lg hover:font-bold text-textColor hover:text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-400 transition-all ease-in-out cursor-pointer"
            >
              <FcCollaboration />
              Collab
            </Link>
            <Link
              to={"/ai-news"}
              className="nav-items w-auto text-base p-2 rounded-lg hover:font-bold text-textColor hover:text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-500 transition-all ease-in-out cursor-pointer"
            >
              <GiNewspaper />
              AI News
            </Link>
            <Link
              to={"/about-us"}
              className="nav-items w-auto text-base p-2 rounded-lg hover:font-bold text-textColor hover:text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-600 transition-all ease-in-out cursor-pointer"
            >
              <RiTeamFill />
              Team
            </Link>
            <Link
              to={"/updates"}
              className="nav-items w-auto text-base p-2 rounded-lg hover:font-bold text-textColor hover:text-black hover:bg-gradient-to-r from-cyan-500 to-blue-500 duration-700 transition-all ease-in-out cursor-pointer"
            >
              <GrUpdate />
              Updates
            </Link>
          </motion.ul>

          {user && (
            <motion.div
              initial={{ opacity: 0, y: 300 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 300 }}
              whileTap={{ scale: 0.6 }}
              className="relative flex items-center"
            >
              <BiTask className="text-textColor hover:text-black hover:font-bold text-2xl cursor-pointer" />
              <div className="absolute -top-2 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center">
                <p className="text-xs my-1 mx-1.5 text-black font-semibold">
                  1
                </p>
              </div>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 300 }}
            className="relative  border-3 border-double border-l-red-500 border-b-red-600 border-r-pink-600 border-t-pink-500 rounded-full"
          >
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-8 min-w-[40px] h-8 min-h-[40px] drop-shadow-lg cursor-pointer rounded-full"
              alt=""
              onClick={login}
            />
          </motion.div>

          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-auto pt-2 bg-gradient-to-r from-cyan-500 to-blue-500 shadow-xl rounded-lg flex flex-col absolute top-12 right-24"
            >
              {user && (
                <div>
                  <Link
                    to={"/user/dashboard"}
                    className="mx-1.5 px-1 py-2 flex items-center gap-3 cursor-pointer hover:font-bold hover:bg-gradient-to-r from-green-200 to-green-400 hover:text-black hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                    onClick={() => setIsMenu(false)}
                  >
                    <RiDashboardFill />
                    Dashboard
                  </Link>

                  <p
                    className="mx-1.5 px-1 py-2 flex items-center gap-3 cursor-pointer hover:font-bold hover:bg-gradient-to-r from-green-200 to-green-400 hover:text-black hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                    onClick={logout}
                  >
                    <FiLogOut />
                    Logout
                  </p>
                </div>
              )}

              {user && user.email === "shyamvashishtha640@gmail.com" && (
                <Link
                  to={"/user/dashboard"}
                  className="mx-1.5 px-1 py-2 flex items-center gap-3 cursor-pointer hover:font-bold hover:bg-gradient-to-r from-green-200 to-green-400 hover:text-black hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={() => setIsMenu(false)}
                >
                  <RiDashboardFill />
                  Admin-Dashboard
                </Link>
              )}
            </motion.div>
          )}

          <motion.label
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 300 }}
            className="relative inline-block w-[60px] h-[34px]"
          >
            <input
              type="checkbox"
              className="opacity-0 w-0 h-0 peer border-2"
            />
            <span
              className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-amber-600 transition-all duration-500
                  before:absolute before:content-[''] before:h-[26px] before:w-[26px] before:left-[4px] before:bottom-[4px] before:bg-white before:transition-all before:duration-500
                  after:absolute after:content-['&#9728;&#65039;'] after:left-[7px] after:text-xl after:bottom-[3px] after:transition-all after:duration-500
                  rounded-[34px] before:rounded-[50%]
                  peer-checked:bg-sky-400 peer-focus:shadow-lg peer-checked:before:translate-x-[26px] peer-checked:before:bg-black
                  peer-checked:after:content-['&#127769;']
                  peer-checked:after:translate-x-[26px] peer-checked:after:opacity-100 peer-checked:after:rotate-[360deg] 
                  "
            ></span>
          </motion.label>
        </div>
      </div>

      {/*Tablet & Mobile Devices */}
      <div className="flex justify-center lg:hidden w-auto items-center p-1 gap-3">
        {/* Upper Header */}
        {user && (
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 300 }}
            whileTap={{ scale: 0.6 }}
            className="relative flex items-center"
          >
            <BiTask className="text-textColor hover:text-black hover:font-bold text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-1 w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center">
              <p className="text-xs my-1 mx-1.5 text-textColor hover:text-black hover:font-bold font-semibold">1</p>
            </div>
          </motion.div>
        )}

        {!user && (
          <Link
            to={"/updates"}
            onClick={() => setActiveNav("/updates")}
            className="text-lg p-2 flex items-center text-textColor justify-start hover:bg-gradient-to-r from-cyan-500 to-blue-500 hover:text-black hover:font-bold rounded-lg"
          >
            <GrUpdate />
          </Link>
        )}

        <Link
          to={"/"}
          className="flex justify-center items-center ml-auto gap-2"
        >
          <img src={logo} className="w-8 object-cover hover:motion-safe:animate-spin" alt="logo" />
          <p className="text-headingColor text-2xl font-extrabold">coDrop</p>
        </Link>

        <div className="flex md:gap-6 gap-4 ml-auto items-center">
          <motion.div
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 300 }}
            className="relative border-3 border-double border-l-red-500 border-b-red-600 border-r-pink-600 border-t-pink-500 rounded-full"
          >
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-8 min-w-[40px] h-8 min-h-[40px] drop-shadow-lg cursor-pointer rounded-full"
              alt=""
              onClick={login}
            />
          </motion.div>

          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-[10rem] pt-2 pb-2 bg-gradient-to-r from-cyan-500 to-blue-500 border-sky-200 border-1 text-white rounded-lg flex flex-col absolute top-12 right-24"
            >
              {user && (
                <div>
                  <Link
                    to={"/user/dashboard"}
                    className="mx-1.5 px-1 py-2 flex items-center gap-3 cursor-pointer hover:font-bold hover:bg-gradient-to-r from-green-200 to-green-400 hover:text-black hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                    onClick={() => setIsMenu(false)}
                  >
                    <RiDashboardFill />
                    Dashboard
                  </Link>
                  <p
                    className="m-2 mx-1.5 px-1 py-2 flex items-center gap-3 cursor-pointer bg-slate-300 hover:font-bold hover:bg-gradient-to-r from-green-200 to-green-400 hover:text-black hover:rounded-lg rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                    onClick={logout}
                  >
                    <FiLogOut />
                    Logout
                  </p>
                </div>
              )}

              {user && user.email === "shyamvashishtha640@gmail.com" && (
                <Link
                  to={"/user/dashboard"}
                  className="mx-1.5 px-1 py-2 flex items-center gap-3 cursor-pointer hover:font-bold hover:bg-gradient-to-r from-green-200 to-green-400 hover:text-black hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                  onClick={() => setIsMenu(false)}
                >
                  <RiDashboardFill />
                  Admin-Dashboard
                </Link>
              )}
              <div className="flex flex-col">
                <Link
                  whileTap={{ scale: 0.6 }}
                  to={"/about-us"}
                  onClick={() => setIsMenu(false)}
                  className="mx-1.5 px-1 py-2 flex items-center gap-3 cursor-pointer hover:font-bold hover:bg-gradient-to-r from-green-200 to-green-400 hover:text-black hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                >
                  <RiTeamFill />
                  Team
                </Link>
                <Link
                  whileTap={{ scale: 0.6 }}
                  to={"/updates"}
                  onClick={() => setIsMenu(false)}
                  className="mx-1.5 px-1 py-2 flex items-center gap-3 cursor-pointer hover:font-bold hover:bg-gradient-to-r from-green-200 to-green-400 hover:text-black hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                >
                  <GrUpdate />
                  Updates
                </Link>
              </div>
            </motion.div>
          )}

          <motion.label
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 300 }}
            className="relative inline-block w-[60px] h-[34px]"
          >
            <input
              type="checkbox"
              className="opacity-0 w-0 h-0 peer border-2"
            />
            <span
              className="absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-amber-600 transition-all duration-500
                    before:absolute before:content-[''] before:h-[26px] before:w-[26px] before:left-[4px] before:bottom-[4px] before:bg-white before:transition-all before:duration-500
                    after:absolute after:content-['&#9728;&#65039;'] after:left-[7px] after:text-xl after:bottom-[3px] after:transition-all after:duration-500
                    rounded-[34px] before:rounded-[50%]
                    peer-checked:bg-sky-400 peer-focus:shadow-lg peer-checked:before:translate-x-[26px] peer-checked:before:bg-black
                    peer-checked:after:content-['&#127769;']
                    peer-checked:after:translate-x-[26px] peer-checked:after:opacity-100 peer-checked:after:rotate-[360deg] 
                    "
            ></span>
          </motion.label>
        </div>

        {/* Bottom Header */}
        <nav className="flex justify-center items-center w-full sm:w-max z-50 p-2 bg-gradient-to-br from-cyan-300 to-blue-500 hover:text-black hover:font-bold fixed bottom-0 px-4 shadow-xl rounded-t-xl sm:gap-6 gap-4">
          <Link
            to={"/"}
            onClick={() => setActiveNav("/")}
            className={
              activeNav === "/"
                ? "active text-2xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
                : "text-2xl flex text-textColor hover:text-black hover:font-bold items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
            }
          >
            <BiHomeAlt />
            {/* Home */}
          </Link>
          <Link
            to={"/library"}
            onClick={() => setActiveNav("/library")}
            className={
              activeNav === "/library"
                ? "active text-2xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
                : "text-2xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
            }
          >
            <MdLocalLibrary />
            {/* Library */}
          </Link>
          <Link
            to={"/collab"}
            onClick={() => setActiveNav("/collab")}
            className={
              activeNav === "/collab"
                ? "active text-2xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
                : "text-2xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
            }
          >
            <FcCollaboration />
            {/* Collab */}
          </Link>
          <Link
            to={"/ai-news"}
            onClick={() => setActiveNav("/ai-news")}
            className={
              activeNav === "/ai-news"
                ? "active text-2xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
                : "text-2xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
            }
          >
            <GiNewspaper />
            {/* News */}
          </Link>

          {user && (
            <Link
              to={"/user/dashboard"}
              onClick={() => setActiveNav("/ai-news")}
              className={
                activeNav === "/ai-news"
                  ? "active text-2xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
                  : "text-2xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
              }
            >
              <RiDashboardFill />
              {/* Dashboard */}
            </Link>
          )}
          {!user && (
            <Link
              to={"/about-us"}
              onClick={() => setActiveNav("/about-us")}
              className={
                activeNav === "/about-us"
                  ? "activetext-2xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
                  : "text-2xl text-textColor hover:text-black hover:font-bold flex items-center justify-center hover:bg-gradient-to-tl from-red-500 via-orange-500 to-pink-400 p-2 rounded-lg flex-col"
              }
            >
              <RiTeamFill />
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
