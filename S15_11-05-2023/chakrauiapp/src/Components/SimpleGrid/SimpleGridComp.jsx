import React from "react";
import { Box, SimpleGrid } from "@chakra-ui/react";
function SimpleGridComp(props) {
  return (
    <SimpleGrid columns={3} spacing="10px">
      <Box bg="coral" color="white" h={"100px"}>
        Box 1
      </Box>
      <Box bg="darkred" color="white" h={"100px"}>
        Box 2
      </Box>
      <Box bg="green" color="white" h={"100px"}>
        Box 3
      </Box>
      <Box bg="red" color="white" h={"100px"}>
        Box 4
      </Box>
      <Box bg="black" color="white" h={"100px"}>
        Box 5
      </Box>
      <Box bg="yellow" color="white" h={"100px"}>
        Box 6
      </Box>
    </SimpleGrid>
  );
}

export default SimpleGridComp;
