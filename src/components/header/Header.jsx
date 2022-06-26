import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/cross_circle.png";
import { motion } from "framer-motion";
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
    } else {
      setIsMenu(!isMenu);
    }
  };

  return (
    <header className="h-auto w-screen fixed z-50 pt-2 px-5 bg-transparent backdrop:blur-lg shadow-xl">
      {/* Desktop and Tablet view */}
      <div className="md:flex flex w-auto h-auto items-center">
        <Link to={"/"} className="flex justify-center items-center gap-2">
          <img src={logo} className="w-8 object-cover" alt="logo" />
          <p className="text-headingColor font-extrabold">coDrop</p>
        </Link>

        <div className="flex items-center gap-6 ml-auto">
          <motion.ul
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 300 }}
            className="flex items-center gap-0.5"
          >
            <motion.li
              whileTap={{ scale: 0.6 }}
              className="nav-items w-auto text-base p-2 rounded-lg text-textColor hover:text-headingColor hover:bg-green-200 duration-200 transition-all ease-in-out cursor-pointer"
            >
              <BiHomeAlt />
              Home
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.6 }}
              className="nav-items w-auto text-base p-2 rounded-lg text-textColor hover:text-headingColor hover:bg-green-200 duration-300 transition-all ease-in-out cursor-pointer"
            >
              <MdLocalLibrary />
              Library
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.6 }}
              className="nav-items w-auto text-base p-2 rounded-lg text-textColor hover:text-headingColor hover:bg-green-200 duration-400 transition-all ease-in-out cursor-pointer"
            >
              <FcCollaboration />
              Collab
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.6 }}
              className="nav-items w-auto text-base p-2 rounded-lg text-textColor hover:text-headingColor hover:bg-green-200 duration-500 transition-all ease-in-out cursor-pointer"
            >
              <GiNewspaper />
              AI News
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.6 }}
              className="nav-items w-auto text-base p-2 rounded-lg text-textColor hover:text-headingColor hover:bg-green-200 duration-600 transition-all ease-in-out cursor-pointer"
            >
              <RiTeamFill />
              Team
            </motion.li>
            <motion.li
              whileTap={{ scale: 0.6 }}
              className="nav-items w-auto text-base p-2 rounded-lg text-textColor hover:text-headingColor hover:bg-green-200 duration-700 transition-all ease-in-out cursor-pointer"
            >
              <GrUpdate />
              Updates
            </motion.li>
          </motion.ul>

          <motion.div
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 300 }}
            whileTap={{ scale: 0.6 }}
            className="relative flex items-center -top-4"
          >
            <BiTask className="text-textColor text-2xl cursor-pointer" />
            <div className="absolute -top-2 -right-1 w-4 h-4 rounded-full bg-cartNumBg flex items-center">
              <p className="text-xs my-1 mx-1.5 text-black font-semibold">1</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 300 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 300 }}
            className="relative -top-4 mx-4"
          >
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : Avatar}
              className="w-8 min-w-[40px] h-8 min-h-[40px] drop-shadow-lg cursor-pointer rounded-full border-solid border-green-200 p-2"
              alt=""
              onClick={login}
            />
          </motion.div>

          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className="w-auto pt-2 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute top-16 right-32"
            >
              {user && (
                <Link to={"/user/dashboard"}>
                  <p
                    className="mx-1.5 px-1 py-2 flex items-center gap-3 cursor-pointer hover:bg-green-200 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                    onClick={() => setIsMenu(false)}
                  >
                    <RiDashboardFill />
                    Dashboard
                  </p>
                </Link>
              )}

              {user && user.email === "shyamvashishtha640@gmail.com" && (
                <Link to={"/user/dashboard"}>
                  <p
                    className="mx-1.5 px-1 py-2 flex items-center gap-3 cursor-pointer hover:bg-green-200 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                    onClick={() => setIsMenu(false)}
                  >
                    <RiDashboardFill />
                    Admin-Dashboard
                  </p>
                </Link>
              )}

              <p
                className="mx-1.5 px-1 py-2 flex items-center gap-3 cursor-pointer hover:bg-green-200 hover:rounded-lg transition-all duration-100 ease-in-out text-textColor text-base"
                onClick={() => setIsMenu(false)}
              >
                <FiLogOut />
                Logout
              </p>
            </motion.div>
          )}
        </div>

        <motion.label
          initial={{ opacity: 0, y: 300 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 300 }}
          class="relative inline-block w-[60px] h-[34px] m-3 -top-4"
        >
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
        </motion.label>
      </div>

      {/* Mobile Devices */}
      <div className="flex md:hidden w-full h-full"></div>
    </header>
  );
};

export default Header;
