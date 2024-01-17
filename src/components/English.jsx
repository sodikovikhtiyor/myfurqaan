// import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
// import axios from "axios";
// import React, { useContext, useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Audio from "./audio/Audio";
// import PlayArrowIcon from "@mui/icons-material/PlayArrow";
// // import Context from "../Context";
// // import { UserContext } from "./components/Context.jsx";

// function English() {
//   const [ayahs, setAyahs] = useState([]);
//   const [ayahNum, setAyahNum] = useState("");
//   const [surala, setSurala] = useState([]);
//   const [isButtonClicked, setIsButtonClicked] = useState(false);
//   // const { state, setState } = useContext(Context);
//   const { surahId } = useParams();
//   useEffect(() => {
//     axios
//       .get(`http://api.alquran.cloud/v1/surah/${surahId}/en.asad`)
//       .then((res) => {
//         setSurala(res.data.data);
//         setAyahs(res.data.data.ayahs);
//       })
//       .catch((err) => console.error(err));
//   }, [surahId]);
//   const handleClick = (value) => {
//     console.log(value);
//     setAyahNum(value.number);
//     setIsButtonClicked(true);
//     // setIsButtonClicked(false);
//   };
//   return (
//     <Container maxW="1200px">
//       {[surala].map((sura, index) => {
//         return (
//           <Box key={index}>
//             <Box mb="3rem">
//               <Heading>{sura.englishName}</Heading>
//               <Text>{sura.englishNameTranslation}</Text>
//             </Box>
//             {isButtonClicked ? <Audio number={ayahNum} /> : !isButtonClicked}
//             {ayahs.map((ayah, index) => {
//               return (
//                 <Box key={index}>
//                   <Box gap="10px" mb="2rem">
//                     <Flex
//                       gap="10px"
//                       mb="2rem"
//                       onClick={() => handleClick(ayah)}
//                     >
//                       <Heading fontSize="1.6rem" color="green">
//                         {sura.number}:{ayah.numberInSurah}
//                       </Heading>
//                       <Heading color="black" fontSize="1.6rem" cursor="pointer">
//                         {ayah.text}

//                         <PlayArrowIcon />

//                         {ayah.sajda?.obligatory && (
//                           <Text
//                             textDecoration="underline"
//                             fontSize="12px"
//                             my="5px"
//                             color="red.400"
//                           >
//                             Make sajda
//                           </Text>
//                         )}
//                       </Heading>
//                     </Flex>
//                   </Box>
//                 </Box>
//               );
//             })}
//           </Box>
//         );
//       })}

//       {/* {console.log(ayahNum)} */}
//       {/* {isButtonClicked && (
//         <UserContext.Provider value={{state}}>
//           <App />
//         </UserContext.Provider>
//       )} */}
//     </Container>
//   );
// }

// export default English;
