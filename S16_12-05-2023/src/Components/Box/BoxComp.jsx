import React from "react";
import { Box, Center, Container } from "@chakra-ui/react";

function BoxComp(props) {
  return (
    <Box bg="coral">
      <Center> Chakra UI </Center>
      <Container maxW="lg" bg="red">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim
        blanditiis facilis atque dicta. Iusto cupiditate esse obcaecati
        perspiciatis cum earum officia! Perspiciatis aperiam, magnam provident
        veritatis sunt impedit tenetur, officiis omnis laudantium ea expedita
        tempora consectetur libero neque cum velit.
      </Container>
      <Container bg={"black"} color="white" maxW="xl">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam suscipit
        sint omnis consectetur amet laboriosam ullam labore, quaerat,
        perferendis facere soluta similique minima harum doloribus, nobis
        laudantium rem ex odio placeat? Fuga in, optio, minima adipisci eaque
        blanditiis illum consectetur placeat odit impedit alias vero totam non
        qui consequatur quod, eius dolore! Tenetur est fugit debitis reiciendis?
        Rerum nihil, atque, accusantium iusto rem quos illum vero nam minus
        consequatur aliquam molestias veritatis, id adipisci. A et fugiat
        repellendus aperiam accusantium blanditiis odio facere doloribus
        voluptas error. Officiis asperiores dolores saepe dolorum cupiditate
        consequuntur. Necessitatibus distinctio similique modi dolorum! Velit,
        placeat?
      </Container>
    </Box>
  );
}

export default BoxComp;
