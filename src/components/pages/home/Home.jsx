import React from "react";
import "./Home.css";
import bottomCircleImage from "../../../assets/images/bottom_circle_shadow.png";
import codechefImage from "../../../assets/images/codechef.png";
import codeforcesImage from "../../../assets/images/codeforces.png";
import leetcodeImage from "../../../assets/images/leetcode.png";
import commingSoonImage from "../../../assets/images/commin_soon.png";
import { AiOutlineArrowDown } from "react-icons/ai";
import { motion } from "framer-motion";

const user = JSON.parse(localStorage.getItem("user"));

const platforms = [
  { id: 1, name: "Codechef", image: codechefImage },
  { id: 2, name: "", image: codeforcesImage },
  { id: 3, name: "Leetcode", image: leetcodeImage },
  { id: 4, name: "", image: commingSoonImage },
];

const Home = () => {
  return (
    <div>
      <p className="text-[2.5rem] mt-4 font-bold tracking-normal shadow-2xl md:shadow-none md:bg-none bg-gradient-to-r from-fuchsia-500 via-purple-500 to-purple-400 p-4 rounded-lg leading-9 text-gray-800">
        Welcome{" "}
        {user && (
          <span className="text-green-400 font-medium text-[2rem]">
            {user.displayName}!
          </span>
        )}
        {!user && <span className="text-green-400 text-[2rem]">Coder!</span>}
        <br />
        <span className="text-[2rem] text-red-700"> How is your day?</span>
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
        <div className="py-2 flex-1 flex flex-col items-start leading-9">
          <p className="text-base text-textColor">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
            quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
            mauris. Fusce nec tellus sed augue semper porta. Mauris massa.
            Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad
            litora torquent per conubia nostra, per inceptos himenaeos.
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc.
            Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem
            at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut
            ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel,
            suscipit quis, luctus non, massa. Fusce ac turpis quis ligula
            lacinia aliquet. Mauris ipsum.
          </p>
          <motion.button
            whileTap={{ scale: 0.8 }}
            type="button"
            className="bg-gradient-to-br from-cyan-500 to-blue-500 w-full sm:w-auto px-2 py-1 font-semibold flex items-center justify-center gap-1 rounded-lg hover:text-black"
          >
            What's Hot Today
            <AiOutlineArrowDown className="animate-bounce" />
          </motion.button>
        </div>
        <div className="hidden h-[60vh] sm:flex p-7 mt-8 w-full flex-1 relative flex-col-reverse  bg-gradient-to-b from-blue-50 to-blue-300 rounded-3xl">
          <img
            src={bottomCircleImage}
            className="w-full h-20"
            alt="upper_background"
          />
          <div className="w-full absolute -top-10 flex gap-6 flex-wrap justify-center items-center px-10">
            {platforms.map((card) => (
              <motion.div
                initial={{ opacity: 0, y: 200 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 200 }}
                key={card.id}
                className="w-auto h-[120px] items-center p-4 my-4 bg-gradient-to-t from-red-400 to-red-200 backdrop-blur-lg rounded-t-md rounded-b-2xl flex flex-col"
              >
                <img
                  src={card.image}
                  className="w-[100px] -mt-12 mb-3 hover:motion-safe:animate-spin"
                  alt={card.name}
                />
                <p className="font-bold text-textColor">{card.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
