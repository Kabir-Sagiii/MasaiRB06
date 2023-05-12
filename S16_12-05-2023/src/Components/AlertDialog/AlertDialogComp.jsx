import React from "react";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  useDisclosure,
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Button,
  Center,
} from "@chakra-ui/react";

function AlertDialogComp(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <div>
        <Center>
          {" "}
          <Button colorScheme="red" onClick={onOpen}>
            <DeleteIcon />
            &nbsp; Delete User
          </Button>
        </Center>
      </div>
      <AlertDialog isOpen={isOpen} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader>Confirmation From User</AlertDialogHeader>
            <AlertDialogCloseButton />
            <AlertDialogBody>Are You Sure ?</AlertDialogBody>
            <AlertDialogFooter>
              <Button colorScheme="red" onClick={onClose}>
                Cancel
              </Button>
              &nbsp;&nbsp;
              <Button colorScheme="green" onClick={onClose}>
                Ok
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </div>
  );
}

export default AlertDialogComp;
