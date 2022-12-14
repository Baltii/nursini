import { useEffect, useState } from "react";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import Notification from "./Notification";
import { Link } from "react-router-dom";
import { getAuth } from "../Hooks/auth";
import axios from "axios";

const SignOut = async (client) => {
  const res = await axios({
    method: "put",
    url: `http://localhost:5000/changeStatusOff/${client.email}`,
  });
  console.log(res);

  if (res.status === 200) {
    setTimeout(() => {
      localStorage.removeItem("current_user");
      window.location.reload();
    }, 2000);
  }
};

const Links = ["Home", "About us", "How it Works?", "Contact"];

const NavLink = ({ children }) => {
  return (
    <Link
      px={2}
      py={1}
      rounded={"md"}
      _hover={{
        textDecoration: "none",
        bg: "#0067FF",
      }}
      href={"#"}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [client, setClient] = useState([]);
  const toast = useToast();
  useEffect(() => {
    setClient(getAuth());
  }, []);
  let Status;
  if (client != null) {
    Status = (
      <>
        <Notification user={client} />
        <Menu>
          <MenuButton
            as={Button}
            rounded={"full"}
            variant={"link"}
            cursor={"pointer"}
            minW={0}
          >
            <Avatar size={"sm"} src={client.img} />
          </MenuButton>
          <MenuList>
            <MenuItem fontWeight={"700"}>
              {client.f_name + " " + client.l_name}
              <Box
                as="div"
                h="12px"
                w="12px"
                left={90}
                position="relative"
                bgColor={client.isActive === 1 ? "green.300" : "gray.300"}
                borderRadius="50%"
              ></Box>
            </MenuItem>
            <MenuDivider />
            <MenuItem
              onClick={() => {
                SignOut(client);
                toast({
                  title: "Good Bye!",
                  description: "See you next time.",
                  status: "loading",
                  duration: 2000,
                  isClosable: true,
                });
              }}
              color={"red.400"}
              fontWeight={"700"}
            >
              Logout
            </MenuItem>
          </MenuList>
        </Menu>
      </>
    );
  } else {
    Status = (
      <>
        <Button
          as={"a"}
          fontSize={"sm"}
          fontWeight={700}
          variant={"link"}
          textDecoration={"none"}
          href={"/login"}
          color={"white"}
        >
          Log In
        </Button>
        <Button
          as={"a"}
          display={{ base: "none", md: "inline-flex" }}
          fontSize={"sm"}
          fontWeight={600}
          color={"white"}
          bg={"blue.400"}
          href={"/signup"}
          _hover={{
            bg: "blue.300",
          }}
        >
          Sign Up
        </Button>
      </>
    );
  }
  //!end check user sign in static

  return (
    <>
      <Box px={4} mb={"10"}>
        <Flex
          h={16}
          alignItems={"center"}
          justifyContent={"space-between"}
          paddingInline={"10"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Box
            fontWeight={700}
            px={"5"}
            py={"2"}
            bgColor={"#E4EDFF"}
            borderRadius={"full"}
            fontSize={"xl"}
            color={"#0067FF"}
          >
            <Link to={"/"} color={"#0067FF"}>
              Nursini
            </Link>
          </Box>
          <HStack spacing={8} alignItems={"center"}>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
            >
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <HStack spacing={4}>{Status}</HStack>
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
