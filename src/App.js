import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

import MyFooter from "./components/MyFooter";
import MyMain from "./components/MyMain";
import MyNav from "./components/MyNav";

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
