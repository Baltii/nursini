import {
  Box,
  Button,
  Container,
  Heading,
  List,
  ListIcon,
  ListItem,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, {  } from "react";
import SigninForm from "../components/signinForm";
import backg from "../assets/images/background.png";
import { MdCheckCircle } from "react-icons/md";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { HiHome } from "react-icons/hi";

const SignIn = () => {
  return (
    <Box
      position={"absolute"}
      bgImage={backg}
      w={"100%"}
      bgRepeat={"no-repeat"}
      bgPosition={"top right"}
    >
      <Button
        mt={5}
        ml={5}
        leftIcon={<HiHome />}
        colorScheme="blue"
        variant="solid"
        zIndex={10}
      >
        <Link to={"/"}>Go Home</Link>
      </Button>
      <Box position={"relative"} mt={"-50px"}>
        <Container
          as={SimpleGrid}
          maxW={"7xl"}
          columns={{ base: 1, md: 2 }}
          spacing={{ base: 10, lg: 32 }}
          py={{ base: 10, sm: 20, lg: 32 }}
        >
          <Stack spacing={{ base: 6, md: 8 }}>
            <Heading
              lineHeight={1.1}
              fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "8xl" }}
              color={"#0067FF"}
            >
              Login Now
            </Heading>
            <Text fontWeight={700}>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi
              ipsa eius doloremque non fuga deserunt consectetur excepturi,
              dicta esse
            </Text>
            <List spacing={3} paddingLeft={8}>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue.500" />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue.500" />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
              <ListItem>
                <ListIcon as={MdCheckCircle} color="blue.500" />
                Assumenda, quia temporibus eveniet a libero incidunt suscipit
              </ListItem>
            </List>
          </Stack>
          <Stack
            bg={"#F1F7FF"}
            rounded={"xl"}
            p={{ base: 4, sm: 6, md: 8 }}
            spacing={{ base: 8 }}
            maxW={{ lg: "lg" }}
            boxShadow={"2xl"}
          >
            <SigninForm />
          </Stack>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default SignIn;
