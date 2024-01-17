import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import Showcase from "../showcase/Showcase";

function Home() {
  const styledLink = {
    border: "2px solid grey",
    display: "inline-block",
    padding: "20px",
    borderRadius: "20px",
    color: "grey",
    fontWeight: "bold",
    "&:hover": {
      background: "grey",
      color: "#fff",
    },
  };
  return (
    <Box my='30px'>
      {/* <Header/> */}
      {/* <Showcase/> */}
      <Link to="/surah">
        <Text sx={styledLink}>Go to Quran</Text>
      </Link>
      
      <Outlet />
    </Box>
  );
}

export default Home;
