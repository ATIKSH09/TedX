import React from "react";

function Card({ link, title, category, price, off }) {
  return (
    <div className="w-72    " data-aos="fade-up">
      <img className="hover:shadow-2xl" src={link} alt="" />
      <h1 className="  font-semibold  border-black pt-2 border-b">{title}</h1>
      <h1 className="  text-xs ">{category}</h1>
      <div className=" font-bold flex justify-between pt-2 text-2xl">
        <p className="inline">Rs. {price}</p>
        <p className="inline text-red-500 font-semibold">{off}% off</p>
      </div>
    </div>
  );
}

export default Card;
