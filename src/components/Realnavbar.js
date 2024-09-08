import React from "react";
import { a } from "react-router-dom";

function Realnavbar(props) {
  var num = 1;
  const change = () => {
    const side = document.getElementById("side");
    const main = document.getElementById("main");
    // const checking = document.getElementById("checking");
    if (num % 2 != 0) {
      side.classList.remove("translate-x-[-100%]");
      main.classList.add("translate-x-[60%]");
      // checking.classList.add("w-[100vw]");
      // checking.classList.add("h-[100vh]");
      // checking.style.display = "none";
    } else {
      side.classList.add("translate-x-[-100%]");
      main.classList.remove("translate-x-[60%]");
      // checking.classList.remove("w-[100vw]");
      // checking.classList.remove("h-[100vh]");
    }
    num++;
  };

  return (
    <div className=" relative " style={{ background: `${props.bg}` }}>
      <div
        id="side"
        className="hidden side translate-x-[-100%] duration-700 font-extralight pt-3 bg-[#131419] fixed left-0 w-[60vw] h-[100vh] sm:block z-[10]"
      >
        <a href="/" className="text-white flex items-center py-3  px-5">
          Home
        </a>
        <a href="/Events" className="text-white flex items-center py-3  px-5">
          Events
        </a>
        <a
          href="/Projects"
          className="text-white py-3  px-5 flex items-center"
        >
          Projects
        </a>
        <a href="/Team" className="text-white py-3  px-5 flex items-center">
          Our Team
        </a>
        <a href="/Contact" className="text-white py-3  px-5 flex items-center">
          Contact Us
        </a>
      </div>
      <div id="main" className="duration-700">
        <div id="navbar" className=" ">
          <div className=" flex   justify-between relative sm:bg-[#1F2029] bg-transparent sm:justify-center">
            <div className="absolute top-0 left-0 justify-center items-center h-full hidden sm:flex px-4 bg-[#8A6500]">
              <label id="checking" htmlFor="check">
                <span className="material-symbols-outlined">menu</span>
              </label>
              <input
                className="hidden"
                type="checkbox"
                onChange={change}
                name="check"
                id="check"
              />
            </div>

            <div className="w-auto sm:w-auto">
              <img
                className="w-32 py-3 sm:py-1 px-3"
                src="https://enactusbitshyd.in/images/LogoWhite.png"
                alt=""
              />
            </div>

            <div className="sm:hidden w-full justify-end flex align-middle">
              <a
                href="/"
                className="text-white hover:border-b border-white hover:text-[#FFC223]  flex items-center py-4 px-4"
              >
                Home
              </a>
              <a
                href="/Events"
                className="text-white hover:border-b border-white hover:text-[#FFC223]  flex items-center py-4 px-4"
              >
                Events
              </a>
              <a
                href="/Projects"
                className="text-white hover:border-b border-white hover:text-[#FFC223]  py-4 px-4 flex items-center"
              >
                Projects
              </a>
              <a
                href="/Team"
                className="text-white hover:border-b border-white hover:text-[#FFC223]  py-4 px-4 flex items-center"
              >
                Our Team
              </a>
              <a
                href="/Contact"
                className="text-white  hover:border-b border-white hover:text-[#FFC223] py-4 px-4 flex items-center"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Realnavbar;
