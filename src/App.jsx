import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import React from "react";
// import Surah from "./components/surah/Surah";
const LazySurah = React.lazy(() => import("./components/surah/Surah"));
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route
          path="surah/:surahId"
          element={
            <React.Suspense fallback='loading...'>
              <LazySurah />
            </React.Suspense>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
