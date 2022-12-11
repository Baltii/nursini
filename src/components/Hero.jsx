import { SearchIcon } from "@chakra-ui/icons";
import {
  Container,
  Stack,
  Flex,
  Heading,
  Text,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  HStack,
} from "@chakra-ui/react";
import { CiLocationOn } from "react-icons/ci";
import { TbNurse } from "react-icons/tb";
import { BiHappyBeaming } from "react-icons/bi";
import { useState } from "react";

export default function Hero({ searchVar }) {
  const [search, setSearch] = useState("");
  return (
    <Container maxW={"7xl"}>
      <Stack
        align={"flex-start"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        direction={{ base: "column", md: "row" }}
      >
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            lineHeight={1.1}
            fontWeight={600}
            fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
          >
            <Text
              as={"span"}
              color={"#0067FF"}
              fontWeight={700}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: "30%",
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "red.400",
                zIndex: -1,
              }}
            >
              Find a nurse
            </Text>
            <br />
            <Text as={"span"} color={"#0067FF"} fontWeight={700}>
              & book online
            </Text>
          </Heading>
          <Text color={"gray.500"} maxW={"50%"}>
            in this website you will be able to find the nurses that will
            provide services for your patient and take good care of them
          </Text>
          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={{ base: "column", sm: "row" }}
            w={"50%"}
          >
            <FormControl>
              <InputGroup>
                <InputLeftElement
                  pointerEvents="none"
                  children={<CiLocationOn color="gray.300" />}
                />
                <Input
                  type="text"
                  placeholder="Where do you live ?"
                  onChange={(e) => setSearch(e.target.value)}
                />
              </InputGroup>
            </FormControl>
            <FormControl w={{ base: "100%", md: "40%" }}>
              <Button
                colorScheme={"blue"}
                w="100%"
                type={"submit"}
                onClick={searchVar(search)}
              >
                <SearchIcon />
              </Button>
            </FormControl>
          </Stack>
        </Stack>
      </Stack>
      <Flex
        pos={"relative"}
        ml={"15%"}
        bgColor={"#E4EDFF"}
        py={"20px"}
        borderRadius={"20px"}
        boxShadow={"2xl"}
        zIndex={"10"}
        w={"70%"}
        alignItems={"center"}
        justify={"space-around"}
        color={"#0067FF"}
        fontWeight={"extrabold"}
      >
        <HStack spacing={100} w={"auto"}>
          <HStack>
            <TbNurse size={60} />
            <Heading>
              +250 <sub>nurses</sub>
            </Heading>
          </HStack>
          <HStack>
            <BiHappyBeaming size={60} />
            <Heading>
              +1000 <sub>happy patients</sub>
            </Heading>
          </HStack>
        </HStack>
      </Flex>
    </Container>
  );
}
