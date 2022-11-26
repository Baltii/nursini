import {
    Heading,
    Avatar,
    Box,
    Text,
    Stack,
    Button,
    Link,
    useColorModeValue,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    useDisclosure,
  } from '@chakra-ui/react';
  import Multistep from './multi-form';

const Card = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Box
        maxW={'320px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'lg'}
        p={6}
        textAlign={'center'}>
        <Avatar
          size={'xl'}
          src={
            'https://images.unsplash.com/photo-1520810627419-35e362c5dc07?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&ixid=eyJhcHBfaWQiOjE3Nzg0fQ'
          }
          alt={'Avatar Alt'}
          mb={4}
          pos={'relative'}
          _after={{
            content: '""',
            w: 4,
            h: 4,
            bg: 'green.300',
            border: '2px solid white',
            rounded: 'full',
            pos: 'absolute',
            bottom: 0,
            right: 3,
          }}
        />
        <Heading fontSize={'2xl'} fontFamily={'body'}>
          Lindsey James
        </Heading>
        <Text fontWeight={600} color={'gray.500'} mb={4}>
          El Ouardia, Tunis
        </Text>
        <Text
          textAlign={'center'}
          color={useColorModeValue('gray.700', 'gray.400')}
          px={3}>
          Actress, musician, songwriter and artist. PM for work inquires or{' '}
          <Link href={'#'} color={'blue.400'}>
            #tag
          </Link>{' '}
          me in your posts
        </Text>
        <Stack mt={8} direction={'row'} spacing={4}>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            _focus={{
              bg: 'gray.200',
            }}
            onClick={onOpen}>
            Contact
          </Button>
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            bg={'blue.400'}
            color={'white'}
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Profile
          </Button>
        </Stack>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose} scrollBehavior={'inside'} isCentered size={'xl'}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <Multistep />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Card