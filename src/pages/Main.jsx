import { Container, Flex } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Main = () => {
const [nurses, setNurses] = useState([]);
  useEffect(() => {
    return () => {
      axios({
        method : 'get',
        url : 'http://localhost:5000/getAllNurses'
      }).then(
        res => {
          setNurses(res.data);
          console.log(res.data);
        });
    }
  }, [])
  
  return (
    <>
      <Flex
        direction={"column"}
        w={"100%"}
        h={"100vh"}
        position={"absolute"}
        justify={"space-between"}
      >
        <Navbar />
        <Container maxW={"90%"}>
          {nurses.map((nurse) =>(
            <Card Nurse={nurse} />
          )
          )}
        </Container>
        <Footer />
      </Flex>
    </>
  );
};

export default Main;
