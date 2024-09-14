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
    <div className=" relative px-4 sm:px-0 sm:py-0 py-4" style={{ background: `${props.bg}` }}>
      <div
        id="side"
        className="hidden side translate-x-[-100%] duration-700 font-extralight pt-3 bg-[#131419] fixed left-0 w-[60vw] h-[100vh] sm:block z-[10]"
      >
        <a href="/" className="text-white flex items-center py-3  px-5">
          Home
        </a>
        <a href="/T-shirts" className="text-white flex items-center py-3  px-5">
          T-shirts
        </a>
        <a href="/Posters" className="text-white py-3  px-5 flex items-center">
          Posters
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

            <div className="w-auto sm:py-4 sm:w-auto flex items-center ">
              <svg
                viewBox="0 0 68 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 lg:mr-3"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.419 0v6.151h-6.763V24h-7.44V6.151H.453V0H21.42zm21.484 0v6.141l-12.918.01v2.946h12.918v5.73l-12.918-.009v3.03h12.918V24H22.546V0h20.357zm13.446 0c8.048 0 10.889 5.916 10.889 11.966C67.237 19.328 63.314 24 54.894 24H44.142V0h12.207zm-2.4 6.151H51.58V17.85h2.908c4.633 0 5.31-3.731 5.31-5.983 0-1.513-.474-5.715-5.85-5.715z"
                  fill="#EB0028"
                  data-darkreader-inline-fill=""
                
                ></path>
              </svg>
            </div>

            <div className="sm:hidden w-full justify-end flex align-middle">
              <a
                href="/"
                className="text-white hover:border-b border-white hover:text-[#FFC223]  flex items-center py-4 px-4"
              >
                Home
              </a>
              <a
                href="/T-shirts"
                className="text-white hover:border-b border-white hover:text-[#FFC223]  flex items-center py-4 px-4"
              >
                T-shirts
              </a>
              <a
                href="/Posters"
                className="text-white hover:border-b border-white hover:text-[#FFC223]  py-4 px-4 flex items-center"
              >
                Posters
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
