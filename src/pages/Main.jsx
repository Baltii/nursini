import { Container, Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Main = () => {
  const [nurses, setNurses] = useState([]);
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
        position={"absolute"}
        justify={"space-between"}
      >
        <Navbar />
        <Container maxW={"90%"}>
          <Flex direction={"row"} align={"space-between"} gap={"5"}>
            {nurses
              ? nurses.map((nurse) => (
                  <Card key={nurse.email} px={"20"} Nurse={nurse} />
                ))
              : ""}
          </Flex>
        </Container>
        <Footer />
      </Flex>
    </>
  );
};

export default Main;
