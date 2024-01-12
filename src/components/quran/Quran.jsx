import {
  Box,
  Container,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";
import logo from "../../assets/quran.png";
import { Search2Icon, SearchIcon } from "@chakra-ui/icons";
function Quran() {
  const [surahs, setSurahs] = useState([]);
  // const { t, i18n } = useTranslation();
  // const changeLanguage = (language) => {
  //   i18n.changeLanguage(language);
  // }
  useEffect(() => {
    axios
      .get("https://api.alquran.cloud/v1/surah")
      .then((res) => setSurahs(res.data.data))
      .catch((err) => console.error(err));
  }, []);
  const inputStyle = {
    ":focus": {
      outline: "none",
    },
  };
  return (
    <Container maxW="1200px" color="black" py="2rem">
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
      <Heading textAlign="center" my="2rem">
        All surahs
        {/* <button onClick={() => changeLanguage('en')}>EN</button>
        <button onClick={() => changeLanguage('ar')}>AR</button>
        <div>{t("text")}</div> */}
      </Heading>
      <Flex wrap="wrap" justify="space-between" gap="20px">
        {surahs
          .filter((item) => {
            return search.toLowerCase() === ""
              ? item
              : item.first_name.toLowerCase().includes(search);
          })
          .map((sura, index) => {
            return (
              <NavLink to={"surah/" + sura.number} key={index}>
                <Box
                  border="1px solid black"
                  borderRadius="10px"
                  p="10px"
                  w="300px"
                  cursor="pointer"
                  _hover={{
                    background: "gray.200",
                    border: "1px solid gray",
                  }}
                  key={index}
                >
                  <Flex alignItems="top" gap="10px">
                    <Heading fontSize="1.6rem" color="black">
                      {sura.number}.
                    </Heading>
                    <Box>
                      <Heading color="black" fontSize="1.6rem">
                        {sura.name}
                      </Heading>
                      <Text>{sura.englishNameTranslation}</Text>
                    </Box>
                  </Flex>
                </Box>
              </NavLink>
            );
          })}
      </Flex>
    </Container>
  );
}

export default Quran;
