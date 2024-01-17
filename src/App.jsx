import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import React from "react";
import Header from "./components/header/Header";
import Quran from "./components/quran/Quran";
import Showcase from "./components/showcase/Showcase";
// import English from "./components/English";
// import Surah from "./components/surah/Surah";
const LazySurah = React.lazy(() => import("./components/surah/Surah"));
function App() {
  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Showcase />}></Route>
        <Route path="/surah" element={<Quran />}></Route>
        <Route
          path=":surahId"
          element={
            <React.Suspense fallback="loading...">
              <LazySurah />
            </React.Suspense>
          }
        ></Route>
        {/* <Route path="/en" element={<English />}></Route> */}
      </Routes>
    </>
  );
}

export default App;
