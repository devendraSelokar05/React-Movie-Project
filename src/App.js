import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NewMovies from "./components/NewMovies";
import Popular from "./components/Popular";
import Contact from "./components/Contact";
import TestingApi from "./components/TestingApi";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/Newmovies" element={<NewMovies />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/TestingApi" element={<TestingApi />} />
        </Routes>
      </BrowserRouter>

    </>
  );
}

export default App;
