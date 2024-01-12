import { Box, Container, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import mosque from "../../assets/mosque.jpeg";
function Showcase() {
  return (
    <Container py="30px" as="section" maxW="6xl">
      <Flex alignItems="center" gap="1rem">
        <Box>
          <Heading color="green" mb="2rem" fontSize="3.4rem">
            My pocket Quran
          </Heading>
          <Text w="70%" lineHeight="2rem">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
            perferendis aperiam nisi minus, laborum veritatis maiores possimus
            et quaerat dolores rem rerum, iste eius corporis fugit ut,
            exercitationem ratione doloremque?
          </Text>
        </Box>
        <Image
          src={mosque}
          w="400px"
          boxShadow="lg"
          rounded="50%"
          bg="white"
        />
      </Flex>
    </Container>
  );
}

export default Showcase;
