import React, { useState } from "react";
import { ImCross } from "react-icons/im";

const Prrofile = () => {
  const [toggle, setToggle] = useState(true);

  const toggleClass = " transform translate-x-5";

  return (
    <div>
      <div className="container  h-full w-[350px]  font-mono absolute -z-10   text-gray-700  p-7 text-md right-0">
        <div className="flex justify-between py-3 font-bold  ">
          <h2>Info detail</h2>
          <ImCross className="bg-gray-300 w-7 h-7 p-2 rounded-full  "/>
        </div>

        <div className="justify-center flex p-7">
          <img className="w-40 h-40 object-cover rounded-full justify-center items-center" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cHJvZmVzc2lvbmFsfGVufDB8fDB8fA%3D%3D&w=1000&q=80" alt="" />
        </div>
        <div className="text-center p-7">
          <h2 className="text-xl">Ralph Edward</h2>
          <p className="text-indigo-700 font-sans">Online</p>

        </div>

        <div className="text-gray-500">
          <div className="py-2 text-gray-500">
            <h2>Setting</h2>
          </div>
          <div className="flex py-2 justify-between">
            <h2>Mute notification</h2>
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {/* Switch */}
              <div
                className={`bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md 
         transform +  ${toggle ? null : toggleClass}`}
              ></div>
            </div>
          </div>
          <div className="flex py-2 justify-between">
            <h2>pinned</h2>
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {/* Switch */}
              <div
                className={`bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md 
         transform +  ${toggle ? null : toggleClass}`}
              ></div>
            </div>
          </div>
          <div className="flex py-2 justify-between">
            <h2>Call/video call</h2>
            <div
              className="md:w-14 md:h-7 w-12 h-6 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer"
              onClick={() => {
                setToggle(!toggle);
              }}
            >
              {/* Switch */}
              <div
                className={`bg-white md:w-6 md:h-6 h-5 w-5 rounded-full shadow-md 
         transform +  ${toggle ? null : toggleClass}`}
              ></div>
            </div>
          </div>
        </div>
        <div className="py-3 text-red-600 flex text-sm gap-2 justify-center">
                <button className="bg-red-100 rounded-lg px-5 py-2">
                        Report chat
                </button>
                <button className="bg-red-100 rounded-lg px-5 py-2">
                        Block
                </button>
        </div>
      </div>
    </div>
  );
};

export default Prrofile;
