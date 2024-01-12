import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Surah from "./components/surah/Surah";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="surah/:surahId" element={<Surah />}></Route>
      </Routes>
    </>
  );
}

export default App;
