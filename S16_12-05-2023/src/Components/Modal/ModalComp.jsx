import {
  useDisclosure,
  Button,
  Center,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

function ModalComp(props) {
  const { onOpen, isOpen, onClose } = useDisclosure();
  return (
    <div>
      <Center>
        {" "}
        <Button onClick={onOpen}>Open Modal</Button>
      </Center>
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay>
          <ModalContent>
            <ModalBody>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              temporibus? Eos labore eligendi odio impedit molestiae debitis
              pariatur natus id dolor, optio eaque nemo obcaecati consectetur
              eius voluptas, mollitia quidem dolorem corrupti quaerat.
              Perspiciatis ipsam assumenda harum cumque dolores inventore
              possimus natus aliquam! Debitis eligendi fuga, officia impedit
              atque vero!
            </ModalBody>
            <ModalFooter>
              <Button colorScheme="red">Cancel</Button>
              <Button colorScheme="blue">Confirm</Button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </div>
  );
}

export default ModalComp;
