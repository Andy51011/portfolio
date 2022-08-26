import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import MainBar from "./components/top/MainBar";
import NavigationScroll from "./components/NavigationScroll";
import MiddleSection from "./components/middle/MiddleSection";

const App = () => {
  return (
    <>
      <NavigationScroll className="main__nav" />
      <MainBar className="main__top" />
      <MiddleSection className="main__bot" />
    </>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
