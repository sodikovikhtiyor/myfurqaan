import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "../header/Header";

function Surah() {
  const [ayahs, setAyahs] = useState([]);
  const [surala, setSurala] = useState([]);
  const [audio, setAudio] = useState([]);
  const { surahId } = useParams();
  useEffect(() => {
    axios
      .get(`http://api.alquran.cloud/v1/surah/${surahId}/ar.alafasy`)
      .then((res) => {
        console.log(res.data.data.ayahs);
        setSurala(res.data.data);
        setAyahs(res.data.data.ayahs);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <Container maxW="1200px">
      {[surala].map((sura, index) => {
        return (
          <Box key={index}>
            <Header />
            <Box mb="3rem">
              <Heading>{sura.englishName}</Heading>
              <Text>{sura.englishNameTranslation}</Text>
            </Box>
            {ayahs.map((ayah, index) => {
              return (
                <Box key={index}>
                  <Box gap="10px" mb="2rem">
                    <Flex gap="10px" mb='2rem'>
                      <Heading fontSize="1.6rem" color="green">
                        {sura.number}:{ayah.numberInSurah}
                      </Heading>
                      <Heading color="black" fontSize="1.6rem">
                        {ayah.text}
                        {ayah.sajda?.obligatory && (
                          <Text
                            textDecoration="underline"
                            fontSize="12px"
                            my="5px"
                            color="red.400"
                          >
                            Make sajda
                          </Text>
                        )}
                      </Heading>
                    </Flex>
                    <Box>
                      <audio controls autoplay>
                        <source src={ayah.audio} type="audio/ogg" />
                      </audio>
                    </Box>
                  </Box>
                </Box>
              );
            })}
          </Box>
        );
      })}
    </Container>
  );
}

export default Surah;
