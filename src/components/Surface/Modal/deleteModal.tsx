import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from "@chakra-ui/react";

interface DeleteModalProps {
  open: boolean;
  setOpen: (state: any) => void;
}

const DeleteModal = (props: DeleteModalProps) => {
  const { open, setOpen } = props;
  const onClose = () => {
    setOpen((state: boolean) => !state);
  };

  return (
    <Modal isOpen={open} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Delete User</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Are you sure you want to delete this user?</ModalBody>

        <ModalFooter>
          <Button variant="ghost" mr={3} onClick={onClose}>
            Cancel
          </Button>
          <Button color="red.500">Yes, delete</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default DeleteModal;
