import React from "react";
import { Box, Stack, HStack, VStack } from "@chakra-ui/react";

function StackComp(props) {
  return (
    // <Stack direction="column-reverse">
    <VStack>
      <Box bg="coral" color="white" h={"100px"}>
        Box 1
      </Box>
      <Box bg="darkred" color="white" h={"100px"}>
        Box 2
      </Box>
      <Box bg="green" color="white" h={"100px"}>
        Box 3
      </Box>
    </VStack>
    // </Stack>
  );
}

export default StackComp;
