import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

import MyFooter from "./components/MyFooter";
import MyMain from "./components/MyMain";
import MyNav from "./components/MyNav";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <MyNav />
      <MyMain />
      <MyFooter />
    </>
  );
}

export default App;
