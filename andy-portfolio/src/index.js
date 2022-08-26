import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainBar from "./components/top/MainBar";
import NavigationScroll from "./components/NavigationScroll";
import MiddleSection from "./components/middle/MiddleSection";

const App = () => {
  return (
    <>
      <NavigationScroll className="nav-bar" />
      <MainBar />
      <MiddleSection />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
