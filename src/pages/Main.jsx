import { Box, Container, Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import bg from '../assets/images/bg.png'
import Nurses from "../components/Nurses";

const Main = () => {
  const [nurses, setNurses] = useState([]);
  const [search, setSearch] = useState("");
  const searchVar = (input) => (e) => {
    setSearch(input);
  }
  useEffect(() => {
    axios({
      method: "get",
      url: "http://localhost:5000/getAllNurses",
    }).then((res) => {
      setNurses(res.data);
    });
  }, []);

  return (
    <>
      <Flex
        bgColor={"gray.50"}
        direction={"column"}
        w={"100%"}
        h={"100vh"}
        justify={"space-between"}
        gap={7}
      >
        <Box position={'absolute'}  bgImage={bg} w={"100%"}
        h={"100vh"} bgRepeat={'no-repeat'} bgSize={'cover'} />
        <Navbar />
        <Hero searchVar={searchVar} />
        <Container maxW={"90%"}>
          <Nurses nurses={nurses} filter={search} />
          
        </Container>
        <Footer />
      </Flex>
    </>
  );
};

export default Main;
