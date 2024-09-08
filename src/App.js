import React from "react";
import { useEffect, useState, useRef } from "react";
import { createBrowserRouter } from "react-router-dom";
import Card from "./components/Card";
import Realnavbar from "./components/Realnavbar";

function App() {
  return (
    <>
      <Realnavbar bg="#1F2029" />
      <Card />
    </>
  );
}

export default App;
