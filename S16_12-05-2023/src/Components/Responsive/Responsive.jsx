import { Box } from "@chakra-ui/react";
import React from "react";

function Responsive(props) {
  return (
    <Box
      color="white"
      //   w={{
      //     base: "20px",
      //     sm: "20px",
      //     md: "100px",
      //     lg: "300px",
      //     xl: "800px",
      //     "2xl": "1000px",
      //   }}
      //   w={["20px", "100px", "300px"]}

      //   fontSize={["12px", "40px", "20px"]}
      h={{ base: "100px", sm: "50px", md: "200px" }}
      //   bg={["green", "red", "black", "blue"]}
      bg={{ base: "black", sm: "green", md: "red" }}
    >
      Box1
    </Box>
  );
}

export default Responsive;
