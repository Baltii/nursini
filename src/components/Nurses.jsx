import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  HStack,
  Spacer,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Card from "./Card";
import { FaSortAlphaDown, FaSortAlphaUp } from "react-icons/fa";

const Nurses = ({ nurses, filter }) => {
  const [selected, setSelected] = useState("All");
  const [isSorted, setIsSorted] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const notFount = (
    <Box textAlign="center" py={10} px={6}>
      <Heading
        display="inline-block"
        as="h2"
        size="2xl"
        bg="blue.400"
        backgroundClip="text"
      >
        404
      </Heading>
      <Text fontSize="18px" mt={3} mb={2} fontWeight={700} color={"blue.400"}>
        Nurses Not Found.
      </Text>
      <Text color={"gray.500"} mb={6}>
        Try to search another city or other service.
      </Text>
    </Box>
  );

  return (
    <>
      <Heading size={"xl"} color={"#0067FF"} py={"3"}>
        Browse Nurses.
      </Heading>
      <Text pb={"8"}>
        Easily book a nurse anywhere in Tunisia with Nursini.
      </Text>
      <Flex
        pos={"relative"}
        bgColor={"white"}
        py={"10px"}
        borderRadius={"10px"}
        boxShadow={"base"}
        zIndex={"10"}
        w={"100%"}
        alignItems={"center"}
        color={"white"}
        fontWeight={"extrabold"}
        px={5}
      >
        <HStack spacing={8} w={"auto"}>
          <ButtonGroup>
            <Button
              onClick={(e) => setSelected(e.target.value)}
              isActive={selected === "All"}
              _active={{ bg: "#0067FF" }}
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "#0067FF",
              }}
              value={"All"}
            >
              All
            </Button>
            <Button
              onClick={(e) => setSelected(e.target.value)}
              isActive={selected === "Kids"}
              _active={{ bg: "#0067FF" }}
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "#0067FF",
              }}
              value={"Kids"}
            >
              Kids
            </Button>
            <Button
              onClick={(e) => setSelected(e.target.value)}
              isActive={selected === "Other"}
              _active={{ bg: "#0067FF" }}
              _hover={{
                bg: "blue.500",
              }}
              _focus={{
                bg: "#0067FF",
              }}
              value={"Other"}
            >
              Other
            </Button>
          </ButtonGroup>
        </HStack>
        <Spacer />
        <Button
          bgColor={"#0067FF"}
          _hover={{
            bg: "#0090FF",
          }}
          onClick={(e) => {
            setIsSorted(!isSorted);
            setIsPressed(!isPressed);
          }}
        >
          {isPressed ? <FaSortAlphaUp /> : <FaSortAlphaDown />}
        </Button>
      </Flex>
      <Flex
        direction={"row"}
        align={"space-between"}
        gap={"5"}
        justify={"center"}
        my={5}
      >
        {nurses && selected === "All" && filter === "" && isSorted === false
          ? [...nurses]
              .sort((a, b) => (b.f_name > a.f_name ? -1 : 1))
              .map((nurse) => (
                <Card key={nurse.email} px={"20"} Nurse={nurse} />
              ))
          : nurses && selected === "All" && filter === "" && isSorted === true
          ? [...nurses]
              .sort((a, b) => (b.f_name > a.f_name ? 1 : -1))
              .map((nurse) => (
                <Card key={nurse.email} px={"20"} Nurse={nurse} />
              ))
          : nurses && selected === "All" && filter !== "" && isSorted === false
          ? [...nurses]
              .filter((e) => e.city === filter)
              .sort((a, b) => (b.f_name > a.f_name ? -1 : 1))
              .map((nurse) => (
                <Card key={nurse.email} px={"20"} Nurse={nurse} />
              ))
          : nurses && selected === "All" && filter !== "" && isSorted === true
          ? [...nurses]
          .filter((e) => e.city === filter)
          .sort((a, b) => (b.f_name > a.f_name ? 1 : -1))
          .map((nurse) => (
            <Card key={nurse.email} px={"20"} Nurse={nurse} />
          ))
          : notFount}
      </Flex>
    </>
  );
};

export default Nurses;
