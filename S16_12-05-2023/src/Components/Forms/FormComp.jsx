import {
  Box,
  Center,
  Container,
  Heading,
  Input,
  Stack,
  RadioGroup,
  Radio,
  Checkbox,
  Textarea,
  Button,
} from "@chakra-ui/react";
import React from "react";

function FormComp(props) {
  return (
    <Container maxW="500px" boxShadow="dark-lg" p="30px">
      <Center>
        <Heading>My From</Heading>
      </Center>
      <Box my="20px">
        <Input variant="flushed" placeholder="User Name" />
      </Box>
      <Box my="20px">
        <Input type="password" variant="flushed" placeholder="Password" />
      </Box>
      <Box my="20px">
        <Input type="email" variant="flushed" placeholder="Email Id" />
      </Box>
      <Box my="20px">
        <RadioGroup>
          <Stack direction="row">
            <Radio value="1">male</Radio>
            <Radio value="2">female</Radio>
          </Stack>
        </RadioGroup>
      </Box>
      <Box my="20px">
        <Textarea placeholder="Here is a sample placeholder" />
      </Box>
      <Box>
        <Stack spacing={5} direction="row">
          <Checkbox colorScheme="green" defaultChecked>
            React
          </Checkbox>
          <Checkbox colorScheme="green" defaultChecked>
            Angular
          </Checkbox>
          <Checkbox colorScheme="green">Node JS</Checkbox>
          <Checkbox colorScheme="green">DSA</Checkbox>
        </Stack>
      </Box>
      <Box my="20px">
        <Center>
          <Button colorScheme="green">Register / Sign Up</Button>
        </Center>
      </Box>
    </Container>
  );
}

export default FormComp;
