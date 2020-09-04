import React from "react";
import "../styles/App.scss";
import Header from "./Header";
import Body from "./Body";
import Aside from "./Aside";
import Sidebar from "./Sidebar";

function App() {
  return (
    <>
    <Header/>
    <Sidebar/>
    <Body/>
    <Aside/>
    </>
  );
}

export default App;
