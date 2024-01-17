import { Box } from "@chakra-ui/react";
import React, { useContext } from "react";
function Audio({number}) {
  // const { state, setState } = useContext(Context);
  return (
    <Box
      position="fixed"
      bottom="0"
      left="0"
      justifyContent="center"
      p="10px"
      w="100%"
      backgroundColor="#00800030"
      textAlign="center"
      opacity="100px"
      display="flex"
    >
      <audio controls autoPlay>
        <source
          src={`https://cdn.islamic.network/quran/audio/128/ar.alafasy/${number}.mp3`}
          type="audio/mpeg"
        />
        {console.log(number)}
      </audio>
    </Box>
  );
}
export default Audio;
