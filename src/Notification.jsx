import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
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
  Stack,
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
} from "@chakra-ui/react";
import { BellIcon, EmailIcon } from "@chakra-ui/icons";
import React from "react";

const Notification = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = React.useState("md");
  return (
    <>
      <Flex justifyContent="center">
        <Popover placement="bottom" isLazy>
          <PopoverTrigger>
            <IconButton
              aria-label="More server options"
              icon={<BellIcon />}
              variant="solid"
              w="fit-content"
            />
          </PopoverTrigger>
          <PopoverContent
            _focus={{ boxShadown: "none" }}
            w={"400px"}
            marginRight={"4"}
          >
            <PopoverArrow />
            <PopoverCloseButton />
            <PopoverHeader fontWeight="bold">Quick Actions</PopoverHeader>
            <PopoverBody w="full">
              <Tabs isLazy colorScheme="blue">
                <TabList>
                  <Tab
                    _focus={{ boxShadow: "none" }}
                    fontSize="xs"
                    fontWeight="bold"
                    w="50%"
                  >
                    Works
                  </Tab>
                  <Tab
                    _focus={{ boxShadow: "none" }}
                    fontSize="xs"
                    fontWeight="bold"
                    w="50%"
                  >
                    Notifications
                  </Tab>
                </TabList>
                <TabPanels>
                  <TabPanel>
                    <Table>
                      <Tbody>
                        <Tr>
                          <Button
                            w={"100%"}
                            h={"100%"}
                            p={"2"}
                            onClick={onOpen}
                          >
                            <Stack
                              direction={"row"}
                              spacing={2}
                              align={"center"}
                              w={"100%"}
                            >
                              <Avatar
                                src={
                                  "https://avatars0.githubusercontent.com/u/1164541?v=4"
                                }
                                alt={"Author"}
                              />
                              <Stack
                                direction={"column"}
                                spacing={0}
                                fontSize={"sm"}
                                align={"start"}
                              >
                                <Text fontWeight={600}>Achim Rolle</Text>
                                <Text color={"gray.500"}>
                                  Feb 08, 2021 · 6min read
                                </Text>
                              </Stack>
                              <EmailIcon flex={1} />
                            </Stack>
                          </Button>
                        </Tr>
                      </Tbody>
                    </Table>
                  </TabPanel>
                  <TabPanel>
                    {/* You can add your content here. */}
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Elementum curabitur vitae nunc sed velit dignissim
                    sodales ut eu. Mauris nunc congue nisi vitae suscipit tellus
                    mauris a diam. Eros in cursus turpis massa tincidunt.
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </PopoverBody>
          </PopoverContent>
        </Popover>
      </Flex>
      <Modal onClose={onClose} size={"xl"} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <TableContainer>
              <Table size="md">
                <Tbody>
                  <Tr>
                    <Td>inches</Td>
                    <Td>millimetres (mm)</Td>
                  </Tr>
                  <Tr>
                    <Td>feet</Td>
                    <Td>centimetres (cm)</Td>
                  </Tr>
                  <Tr>
                    <Td>yards</Td>
                    <Td>metres (m)</Td>
                  </Tr>
                </Tbody>
              </Table>
            </TableContainer>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default Notification;
