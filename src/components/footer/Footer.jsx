import React from "react";
import { Link } from "react-router-dom";
import ItemsContainer from "./ItemsContainer";
import SocialIcons from "./SocialIcons";
import { Icons } from "./menus";
import { motion } from "framer-motion";
import { AiOutlineArrowRight } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="md:flex md:justify-between md:items-center sm:px-12 px-4 bg-[#ffffff19] py-7">
        <h1
          className="lg:text-4xl text-3xl md:mb-0 mb-6 lg:leading-normal font-semibold
      md:w-2/5"
        >
          <span className="text-teal-400">Free</span> until ready for
          production.
        </h1>
        <div className="flex flex-wrap gap-4 justify-center items-center">
          <input
            type="text"
            placeholder="abc@gmail.com"
            className="text-gray-800
        sm:w-72 w-full py-2.5 rounded px-2 focus:outline-none"
          />
          <motion.button
            whileTap={{ scale: 0.8 }}
            type="button"
            className="w-fit px-2 py-2.5 flex bg-gradient-to-br from-cyan-500 to-blue-500 hover:from-yellow-300 hover:to-red-500 font-semibold rounded-lg hover:text-black"
          >
            Subscribe to Newsletter
            <AiOutlineArrowRight className="animate-spin" />
          </motion.button>
        </div>
      </div>
      <ItemsContainer />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 text-center pt-2 text-gray-400 text-sm pb-8">
        <span>© 2022 All rights reserved.</span>
        <span>
          Created with ❤️ by{" "}
          <Link
            to={"https://google.com/"}
            className="text-teal-400 hover:text-black hover:font-bold hover:p-1 hover:rounded-lg bg-gradient-to-br hover:from-yellow-300 hover:to-red-500"
          >
            @its_shyam640
          </Link>
        </span>
        <SocialIcons Icons={Icons} />
      </div>
    </footer>
  );
};

export default Footer;
