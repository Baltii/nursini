import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex,
  IconButton,
  Button,
  Text,
  Avatar,
  Tbody,
  Table,
  Tr,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Td,
  TableContainer,
  Spacer,
  VStack,
  Th,
  Heading,
  HStack,
} from "@chakra-ui/react";
import { BellIcon, CheckIcon, CloseIcon, EmailIcon } from "@chakra-ui/icons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import api from "../Hooks/api";

const Notification = ({ user }) => {
  const [works, setWorks] = useState([]);
  const [work, setWork] = useState([]);
  let count = 0;

  useEffect(() => {
    //Getting All Works of the nurse connected.
    axios({
      method: "get",
      url: `http://localhost:5000/getWorks/${user.email}`,
    }).then((res) => {
      let tri = res.data;
      // sort DESC the array by creation date of work post
      setWorks(
        [...tri].sort((a, b) => (a.createdDate > b.createdDate ? -1 : 1))
      );
    });
  }, [user.email]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  works.map((t) => (t.isOpened === 0 ? (count = count + 1) : ""));

  // function to get info of the selected work mail
  function getInfo(value) {
    let sampleObject = works.find((e) => e.id === value);
    setWork(sampleObject);
  }

  const accept = async (e) => {
    let choix = "accepted";
    const res = await api.put(`/workResponse/${work.id}`, { choix });
    console.log(res);
  };

  const reject = async (e) => {
    let choix = "rejected";
    const res = await api.put(`/workResponse/${work.id}`, { choix });
    console.log(res);
  };

  const isOpened = (e) => {
    let c = 1;
    const res = api.put(`/isOpened/${work.id}`, { c });
    console.log(res);
  };

  return (
    <>
      <Flex justifyContent="center">
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            {count === 0 ? (
              <IconButton
                aria-label="More server options"
                icon={<BellIcon />}
                variant="solid"
                w="fit-content"
              />
            ) : (
              <IconButton
                aria-label="More server options"
                icon={<BellIcon />}
                variant="solid"
                w="fit-content"
                _after={{
                  content: `'${count}'`,
                  w: 6,
                  h: 6,
                  color: "white",
                  bg: "green.400",
                  border: "2px solid white",
                  rounded: "full",
                  pos: "absolute",
                  bottom: 6,
                  right: -1,
                }}
              />
            )}
          </PopoverTrigger>
          <PopoverContent
            _focus={{ boxShadown: "none" }}
            w={"400px"}
            marginRight={"4"}
          >
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverBody w="full">
              <Tabs isLazy colorScheme="blue">
                <TabList>
                  {user.type === "2" ? (
                    <Tab
                      _focus={{ boxShadow: "none" }}
                      fontSize="xs"
                      fontWeight="bold"
                      w="100%"
                    >
                      Works
                    </Tab>
                  ) : (
                    <Tab
                      _focus={{ boxShadow: "none" }}
                      fontSize="xs"
                      fontWeight="bold"
                      w={"100%"}
                    >
                      Notifications
                    </Tab>
                  )}
                </TabList>
                <TabPanels>
                  <TabPanel p={0}>
                    <Table w={"100%"}>
                      <Tbody>
                        {works ? (
                          works.map((w) => (
                            <Tr>
                              <Td p={2}>
                                <Flex
                                  minWidth="max-content"
                                  alignItems="center"
                                  gap="5"
                                >
                                  <Button
                                    key={w.id}
                                    w={"100%"}
                                    h={"100%"}
                                    bgColor={
                                      w.isOpened === 0
                                        ? "gray.50"
                                        : "whiteAlpha.400"
                                    }
                                    py={"2"}
                                    px={"5"}
                                    onClick={() => {
                                      onOpen();
                                      getInfo(w.id);
                                      isOpened();
                                    }}
                                    isActive={
                                      w.status === "accepted" ||
                                      w.status === "rejected"
                                        ? false
                                        : true
                                    }
                                  >
                                    <Avatar
                                      src={w.img}
                                      alt={"Client"}
                                      mr="10px"
                                    />
                                    <VStack spacing={0} align={"start"}>
                                      <Text fontWeight={600}>
                                        {w.f_name + " " + w.l_name}
                                      </Text>
                                      <Text
                                        color={"gray.500"}
                                        fontSize={"12px"}
                                      >
                                        Send you a mail. Click to open
                                      </Text>
                                      <Text
                                        color={"gray.500"}
                                        fontSize={"10px"}
                                      >
                                        {w.createdDate}
                                      </Text>
                                    </VStack>
                                    <Spacer />
                                    {w.status === "" ? (
                                      <EmailIcon />
                                    ) : w.status === "accepted" ? (
                                      <CheckIcon color={"green.400"} />
                                    ) : (
                                      <CloseIcon color={"red.400"} />
                                    )}
                                  </Button>
                                </Flex>
                              </Td>
                            </Tr>
                          ))
                        ) : (
                          <Tr>No Works Found</Tr>
                        )}
                      </Tbody>
                    </Table>
                  </TabPanel>
                  <TabPanel>
                    {/* You can add your content here. */}
                    No Notifications Found.
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
      <Modal
        onClose={onClose}
        size={"xl"}
        isOpen={isOpen}
        scrollBehavior={"inside"}
      >
        {work.isOpened === 0 && isOpen ? isOpened() : ""}
        <ModalOverlay />
        <ModalContent>
          <ModalHeader fontSize={24} fontWeight={"700"}>
            Work Details
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TableContainer>
              <Table size="md">
                <Tbody>
                  <Tr>
                    <Heading size={"sm"} py={2}>
                      Patient Information
                    </Heading>
                  </Tr>

                  <Tr>
                    <Th>Full Name</Th>
                    <Td>{work.f_name + " " + work.l_name}</Td>
                  </Tr>
                  <Tr>
                    <Th>Contact</Th>
                    <Td>{work.email + " / (+216) " + work.tel}</Td>
                  </Tr>
                  <Tr>
                    <Th>Localisation</Th>
                    <Td>
                      {" "}
                      {work.address +
                        ", " +
                        work.state +
                        ", " +
                        work.city +
                        " " +
                        work.zip}{" "}
                    </Td>
                  </Tr>
                  <Tr>
                    <Heading size={"sm"} py={2}>
                      Work Details
                    </Heading>
                  </Tr>
                  <Tr>
                    <Th>Patient Age</Th>
                    <Td>{work.typePatient}</Td>
                  </Tr>
                  <Tr>
                    <Th>Services</Th>
                    <Td>{work.services}</Td>
                  </Tr>
                  <Tr>
                    <Th>Shift Time</Th>
                    <Td>{work.shiftTime}</Td>
                  </Tr>
                  <Tr>
                    <Th>Price Proposed</Th>
                    <Td>{work.price + " DT/Day"}</Td>
                  </Tr>
                  <Tr>
                    <Th>Period of work</Th>
                    <Td>{work.startDate + " - " + work.endDate}</Td>
                  </Tr>
                  <Tr>
                    <Th>More Details</Th>
                    <Td>{work.message === "" ? "No details" : work.message}</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
          <ModalFooter>
            <HStack>
              <Button
                colorScheme={"green"}
                onClick={() => {
                  accept();
                  onClose();
                }}
              >
                Accept
              </Button>
              <Button
                colorScheme={"red"}
                onClick={() => {
                  reject();
                  onClose();
                }}
              >
                Reject
              </Button>
            </HStack>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Notification;
