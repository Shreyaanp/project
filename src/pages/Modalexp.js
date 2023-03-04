import React from "react";
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from "@chakra-ui/react";

const CustomModal = ({ isOpen, onClose, dataexp }) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{dataexp.title}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{dataexp.body}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
