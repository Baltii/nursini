import {
  Heading,
  Avatar,
  Box,
  Text,
  Stack,
  Button,
  useColorModeValue,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useDisclosure,
} from "@chakra-ui/react";
import { getAuth } from "../Hooks/auth";
import Multistep from "./multi-form";

const Card = ({ Nurse }) => {
  const user = getAuth();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box
        maxW={"320px"}
        w={"full"}
        bg={useColorModeValue("white", "gray.900")}
        boxShadow={"2xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={Nurse.img}
          alt={"Avatar Alt"}
          mb={4}
          pos={"relative"}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: Nurse.isActive === 1 ? "green.300" : "gray.300",
            border: "2px solid white",
            rounded: "full",
            pos: "absolute",
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={"2xl"} fontFamily={"body"}>
          {Nurse.f_name + " " + Nurse.l_name}
        </Heading>
        <Text fontWeight={600} color={"gray.500"} mb={4}>
          {Nurse.city + ", " + Nurse.state}
        </Text>
        <Text
          textAlign={"center"}
          color={useColorModeValue("gray.700", "gray.400")}
          px={3}
        >
          {Nurse.description}
        </Text>
        <Stack mt={8} direction={"row"} spacing={4}>
          {user == null ? (
            ""
          ) : user.type === "1" ? (
            <Button
              flex={1}
              fontSize={"sm"}
              rounded={"full"}
              _focus={{
                bg: "gray.200",
              }}
              onClick={onOpen}
            >
              Contact
            </Button>
          ) : user.type === "2" ? (
            ""
          ) : (
            ""
          )}

          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
          >
            Profile
          </Button>
        </Stack>
      </Box>
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        scrollBehavior={"inside"}
        isCentered
        size={"xl"}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Multistep user={user} nurse={Nurse.email} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Card;
