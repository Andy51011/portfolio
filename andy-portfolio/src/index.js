import React from "react";
import ReactDOM from "react-dom";
import backgroundArt from "./components/background/pixel-art.jpg"
import "./index.css"
import MainBar from "./components/MainBar";

const App = () => {
  return (
      <div id="main-content">
        <div><MainBar /></div>
      </div>

  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
