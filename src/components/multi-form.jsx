
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  useToast,
  CheckboxGroup,
  Stack,
  Checkbox,
  RadioGroup,
  Radio,
  InputRightAddon,
} from '@chakra-ui/react';
import React, { useState } from 'react';



const Form1 = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        User Information
      </Heading>
      <Flex>
        <FormControl mr="5%" isRequired>
          <FormLabel htmlFor="first-name" fontWeight={'normal'}>
            First name
          </FormLabel>
          <Input id="first-name" placeholder="First name" required />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="last-name" fontWeight={'normal'}>
            Last name
          </FormLabel>
          <Input id="last-name" placeholder="First name" />
        </FormControl>
      </Flex>
      <FormControl mt="2%" isRequired>
        <FormLabel htmlFor="email" fontWeight={'normal'}>
          Email address
        </FormLabel>
        <Input id="email" type="email" placeholder='Email' />
        <FormHelperText>We'll never share your email.</FormHelperText>
      </FormControl>

      <FormControl isRequired>
        <FormLabel htmlFor="phone_number" fontWeight={'normal'} mt="2%">
          N°Tel
        </FormLabel>
        <InputGroup size="md">
          <InputLeftAddon children='+216' />
          <Input type='tel' placeholder='phone number' />
        </InputGroup>
      </FormControl>
    </>
  );
};

const Form2 = () => {
  const gouv = ['Tunis','Ben Arous','Ariana','Sousse','Mahdia','Sfax'];
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb="2%">
        Localisation
      </Heading>
      <FormControl as={GridItem} colSpan={[6, 3]} isRequired>
        <FormLabel
          htmlFor="country"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}>
          City
        </FormLabel>
        <Select
          id="city"
          name="city"
          autoComplete="city"
          placeholder="Select option"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md">
          {
            gouv.map(e => (<option value={e.valueOf()}>{e.valueOf()}</option>))
          }
        </Select>
      </FormControl>

      <FormControl as={GridItem} colSpan={6} isRequired>
        <FormLabel
          htmlFor="street_address"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          Street address
        </FormLabel>
        <Input
          type="text"
          name="street_address"
          id="street_address"
          autoComplete="street-address"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>


      <FormControl as={GridItem} colSpan={[6, 3, null, 2]} isRequired>
        <FormLabel
          htmlFor="state"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          State / Province
        </FormLabel>
        <Input
          type="text"
          name="state"
          id="state"
          autoComplete="state"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>

      <FormControl as={GridItem} colSpan={[6, 3, null, 2]} isRequired>
        <FormLabel
          htmlFor="postal_code"
          fontSize="sm"
          fontWeight="md"
          color="gray.700"
          _dark={{
            color: 'gray.50',
          }}
          mt="2%">
          ZIP / Postal
        </FormLabel>
        <Input
          type="text"
          name="postal_code"
          id="postal_code"
          autoComplete="postal-code"
          focusBorderColor="brand.400"
          shadow="sm"
          size="sm"
          w="full"
          rounded="md"
        />
      </FormControl>
    </>
  );
};

const Form3 = () => {
  const [value, setValue] = React.useState('1');
  return (
    <>
      <Heading w="100%" textAlign={'center'} fontWeight="normal" mb={'2%'}>
        Service Details
      </Heading>
      <SimpleGrid columns={1} spacing={4}>
      <FormControl isRequired>
      <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Services
          </FormLabel>
      <CheckboxGroup colorScheme='blue'>
        <Stack spacing={1} direction={'column'}>
          <Checkbox value='Service1'>Service 1</Checkbox>
          <Checkbox value='service2'>Service 2</Checkbox>
          <Checkbox value='Service3'>Service 3</Checkbox>
        </Stack>
      </CheckboxGroup>
      </FormControl>
      <FormControl isRequired>
      <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Services
          </FormLabel>
      
      <RadioGroup onChange={setValue} value={value}>
      <Stack direction='column'>
        <Radio value='1'>Day Shift</Radio>
        <Radio value='2'>Night Shift</Radio>
        <Radio value='3'>Full Day</Radio>
      </Stack>
    </RadioGroup>
    </FormControl>
    <FormControl isRequired>
        <FormLabel htmlFor="price" fontWeight={'normal'}>
          Price
        </FormLabel>
        <InputGroup size="md">
          <Input type='number' placeholder='Price' />
          <InputRightAddon children='DT/Day' />
        </InputGroup>
      </FormControl>

    <Flex>
        <FormControl mr="5%" isRequired>
          <FormLabel htmlFor="start_date" fontWeight={'normal'}>
            Start
          </FormLabel>
          <Input id="start_date"  type={'date'} />
        </FormControl>

        <FormControl isRequired>
          <FormLabel htmlFor="end_date" fontWeight={'normal'}>
            End
          </FormLabel>
          <Input id="end_date" type={'date'} />
        </FormControl>
      </Flex>

        <FormControl id="email" mt={1}>
          <FormLabel
            fontSize="sm"
            fontWeight="md"
            color="gray.700"
            _dark={{
              color: 'gray.50',
            }}>
            Patient details
          </FormLabel>
          <Textarea
            placeholder="Describe your situation"
            rows={3}
            shadow="sm"
            focusBorderColor="brand.400"
            fontSize={{
              sm: 'sm',
            }}
          />
          <FormHelperText>
            Brief description for situation of the patient.
          </FormHelperText>
        </FormControl>
      </SimpleGrid>
    </>
  );
};

export default function Multistep() {
  const toast = useToast();
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(33.33);
  return (
    <>
      <Box
        borderWidth="0px"
        rounded="lg"
        // shadow="1px 1px 3px rgba(0,0,0,0.3)"
        maxWidth={800}
        p={6}
        m="10px auto"
        as="form">
        <Progress
          hasStripe
          value={progress}
          mb="5%"
          mx="5%"
          isAnimated></Progress>
        {step === 1 ? <Form1 /> : step === 2 ? <Form2 /> : <Form3 />}
        <ButtonGroup mt="5%" w="100%">
          <Flex w="100%" justifyContent="space-between">
            <Flex>
              <Button
                onClick={() => {
                  setStep(step - 1);
                  setProgress(progress - 33.33);
                }}
                isDisabled={step === 1}
                colorScheme="red"
                variant="solid"
                w="7rem"
                mr="5%">
                Back
              </Button>
              <Button
                w="7rem"
                isDisabled={step === 3}
                onClick={() => {
                  setStep(step + 1);
                  if (step === 3) {
                    setProgress(100);
                  } else {
                    setProgress(progress + 33.33);
                  }
                }}
                colorScheme="blue"
                variant="solid">
                Next
              </Button>
            </Flex>
            {step === 3 ? (
              <Button
                w="7rem"
                colorScheme="green"
                variant="solid"
                onClick={() => {
                  toast({
                    title: 'Account created.',
                    description: "We've created your account for you.",
                    status: 'success',
                    duration: 3000,
                    isClosable: true,
                  });
                }}>
                Submit
              </Button>
            ) : null}
          </Flex>
        </ButtonGroup>
      </Box>
    </>
  );
}