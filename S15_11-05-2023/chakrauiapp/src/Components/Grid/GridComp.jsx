import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";

function GridComp(props) {
  return (
    <Grid
      w="800px"
      m="auto"
      gap="20px"
      templateColumns="100px 400px 200px"
      templateRows="100px 200px 300px"
    >
      <GridItem colSpan={2} rowSpan={2} w="100%" bg="red.100" />
      <GridItem w="100%" bg="blue.500" />
      <GridItem w="100%" bg="purple.200" />
      <GridItem w="100%" bg="black.500" />
      <GridItem w="100%" bg="yellow.500" />
      <GridItem w="100%" bg="red.100" />
      <GridItem w="100%" bg="blue.500" />
      <GridItem w="100%" bg="purple.200" />
      <GridItem w="100%" bg="black.500" />
      <GridItem w="100%" bg="yellow.500" />
    </Grid>
  );
}

export default GridComp;
