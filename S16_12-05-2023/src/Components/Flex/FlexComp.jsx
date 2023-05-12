import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";

function FlexComp(props) {
  return (
    <Container bg="black" maxW="1000px" h={"400px"}>
      <Flex direction="row" justify="end" align="center" h={"400px"}>
        <Box h="100px" w="200px" bg="green">
          Box 1
        </Box>
        <Box h="100px" w="200px" bg="red">
          Box 2
        </Box>
        <Box h="100px" w="200px" bg="blue">
          Box 3
        </Box>
        <Box h="100px" w="200px" bg="coral">
          Box 4
        </Box>
      </Flex>
    </Container>
  );
}

export default FlexComp;
