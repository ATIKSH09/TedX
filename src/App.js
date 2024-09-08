import React from "react";
import { useEffect, useState, useRef } from "react";
import { createBrowserRouter } from "react-router-dom";
import Card from "./components/Card";
import Realnavbar from "./components/Realnavbar";

function App() {
  return (
    <>
      <Realnavbar />
      <Card />
    </>
  );
}

export default App;
