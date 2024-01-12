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
function Header() {
  const [search, setSearch] = useState("");
  const inputStyle = {
    ":focus": {
      outline: "none",
    },
  };
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
              _focus="none"
              w="250px"
              borderRadius="20px"
              sx={inputStyle}
              onChange={(e) => setSearch(e.target.value)}
            />

            <SearchIcon />
          </Flex>
          <LanguageIcon cursor="pointer" />
          <select className="">
            <option value="en">Ensglish</option>
            <option value="ar">Arabic</option>
          </select>

          <Button colorScheme="green">Login</Button>
        </HStack>
      </Flex>
    </Container>
  );
}

export default Header;
