import React, { useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer/footer";
import Navigation from "./components/navigate";
import Caurosel from "./components/carousal";
import Hero from "./components/hero";
import "./App.css";

const App = () => {
  const [myItem, setMyItem] = useState([])
  return (
    <>
      <Navigation />
      <Header />
      <Caurosel/>
      <Hero/>
      <Footer />
    </>
  );
};

export default App;
