import React from "react";
import ReactDOM from "react-dom";
import "./index.css"
import MainBar from "./components/MainBar";
import NavigationScroll from "./components/NavigationScroll";
import MiddleSection from "./components/MiddleSection";

const App = () => {
  return (
      <>
        <NavigationScroll className="nav-bar"/>
        <MainBar />
        <MiddleSection />
      </>

  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
