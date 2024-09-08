import React from "react";
import { useEffect, useState, useRef } from "react";
import { createBrowserRouter } from "react-router-dom";
import Card from "./components/Card";
import Realnavbar from "./components/Realnavbar";

function App() {
  return (
    <>
      <Realnavbar bg="#1F2029" />
      <div className="flex gap-12 justify-center py-12 flex-wrap">
        <Card
          link="https://www.redwolf.in/image/cache/catalog/t-shirts/oversized/got-hotd-caraxes-oversized-t-shirt-india-back-600x800.jpg?m=1724406817"
          title="House of the Dragon official Merch"
          category="oversiged"
          price="699"
          off="12"
        />
        <Card
          link="https://www.redwolf.in/image/cache/catalog/t-shirts/dtg/house-of-the-dragon-dragon-rider-t-shirt-india-600x800.jpg?m=1725619406"
          title="House Targathien"
          category="oversiged"
          price="599"
          off="26"
        />
        <Card
          link="https://www.redwolf.in/image/cache/catalog/t-shirts/dtg/harry-potter-hogwarts-is-my-home-t-shirt-india-600x800.jpg?m=1725619406"
          title="Harry Potter official Merch"
          category="made to order"
          price="699"
          off="22"
        />
        <Card
          link="https://www.redwolf.in/image/cache/catalog/t-shirts/dtg/harry-potter-undesirable-no-one-t-shirt-india-600x800.jpg?m=1725619405"
          title="Harry Potter official Merch"
          category="oversiged"
          price="699"
          off="12"
        />
        <Card
          link="https://www.redwolf.in/image/cache/catalog/posters/cargo-delivery-poster-india-600x800.jpg?m=1687922837"
          title="The Mandalorian"
          category="poster"
          price="319"
          off="8"
        />
        <Card
          link="https://www.redwolf.in/image/cache/catalog/posters/joker-the-killing-joke-poster-india-600x800.png?m=1687873549"
          title="The killing Joker"
          category="magnet"
          price="249"
          off="17"
        />
        <Card
          link="https://www.redwolf.in/image/cache/catalog/posters/marvel-deadpool-and-wolverine-unstoppable-heroes-poster-india-600x800.jpg?m=1718354816"
          title="Deadpool and wolwerine"
          category="poster"
          price="299"
          off="19"
        />
        <Card
          link="https://www.redwolf.in/image/cache/catalog/posters/moon-knight-dark-mode-poster-india-600x800.jpg?m=1687884968"
          title="Moon night"
          category="poster"
          price="294"
          off="21"
        />
       
      </div>
    </>
  );
}

export default App;
