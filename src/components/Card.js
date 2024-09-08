import React from "react";

function Card({ link, title, category, price, off }) {
  return (
    <div className="w-72 rounded-lg shadow-lg hover:shadow-2xl  " data-aos="fade-up">
      <img src={link} alt="" />
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
