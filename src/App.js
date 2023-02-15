import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";

import MyFooter from "./components/MyFooter";
import MyMain from "./components/MyMain";
import MyNav from "./components/MyNav";
import TVShows from "./components/TVShows";
import NavInMain from "./components/NavInMain";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDetails from "./components/MovieDetails";
import CoomingSoon from "./components/CoomingSoon";
function App() {
  return (
    <>
      <BrowserRouter>
        <MyNav />
        <NavInMain />
        <Routes>
          <Route path="/" element={<MyMain />} />
          <Route path="/TVShows" element={<TVShows />} />
          <Route path="/Movies/:movieID" element={<MovieDetails />} />
          <Route path="/RecentlyAdded" element={<CoomingSoon />} />
          <Route path="/MYList" element={<CoomingSoon />} />
          <Route path="/Movies" element={<CoomingSoon />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </>
  );
}

export default App;
