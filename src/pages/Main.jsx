import { Container, Flex } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import Card from '../components/Card'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

const Main = () => {
  
  let user = JSON.parse(localStorage.getItem('current_user'));
  useEffect(() => {
    console.log(user)
  }, []);
  return (
    <>
    <Flex direction={'column'} w={'100%'} h={'100vh'} position={'absolute'} justify={'space-between'}>
    <Navbar />
    <Container maxW={'90%'}>
    <Card />
    </Container>
    <Footer />
    </Flex>
    </>
  )
}

export default Main