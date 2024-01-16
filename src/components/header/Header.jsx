import React, { useState } from "react";
import logo from "../../assets/quran.png";
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Heading,
  Spacer,
} from "@chakra-ui/react";
import SearchIcon from "@mui/icons-material/Search";
import LanguageIcon from "@mui/icons-material/Language";
// import Surah from "../surah/Surah";
function Header() {
  const [search, setSearch] = useState("");
  const [lang, setLang] = useState("");

  return (
    <Container py="30px" as="section" maxW="6xl">
      <Flex alignItems="center" wrap="wrap" p="10px">
        <Flex className="logo" alignItems="center">
          <img src={logo} width="60px" />
          <Heading color="green">My Furqaan</Heading>
        </Flex>
        <Spacer />
        <HStack className="header-right" alignItems="center" spacing="20px">
          <Flex
            className="search-field"
            bg="white"
            borderRadius="20px"
            px="10px"
            py="5px"
            alignItems="center"
            justify="space-between"
            border="1px solid "
          >
            <Box
              as="input"
              type="search"
              bg="white"
              p="5px"
              _focus={{ outline: "none" }}
              w="250px"
              borderRadius="20px"
              onChange={(e) => setSearch(e.target.value)}
            />

            <SearchIcon />
          </Flex>
          <LanguageIcon cursor="pointer" />
          <select value={lang} onChange={(e) => setLang(e.target.value)}>
            <option value="en.asad">English</option>
            <option value="ar.alafasy">Arabic</option>
          </select>
          <Button colorScheme="green">Login</Button>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Header;
