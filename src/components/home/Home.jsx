import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

function Home() {
  return (
    <div>
      {/* <Header/> */}
      {/* <Showcase/> */}
      <Link to="/surah">
        Go to Quran
      </Link>
      <Outlet />
    </div>
  );
}

export default Home;
