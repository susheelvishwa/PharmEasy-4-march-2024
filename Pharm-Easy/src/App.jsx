// import { useState } from "react";
import Navbar from "./Components/Navbar";
import "./App.css";
import AllRoutes from "./Routes/AllRoutes";
import Searchbarr from "./Components/Searchbarr";
import Slidder from "./Components/Slider";

function App() {
  return (
    <>
      <Navbar />
      <Searchbarr />
      <AllRoutes />
      <Slidder />
    </>
  );
}

export default App;
