import React from "react";
import "../styles/App.scss";
import Header from "./Header";
import Body from "./Body";
import Aside from "./Aside";
import Sidebar from "./Sidebar";

function App() {
  return (
    <div className="container">
      <div className="row">
        <Header />
      </div>
      <div className="row">
        <Sidebar />
        <Body />
        <Aside />
      </div>
    </div>
  );
}

export default App;
