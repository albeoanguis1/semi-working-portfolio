import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Container } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiCodeigniter, DiAndroid, DiWebplatform } from 'react-icons/di'
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaGit, FaJsSquare, FaBootstrap } from 'react-icons/fa'
import { SiPostgresql, SiTypescript , SiRedux, SiFlask } from 'react-icons/si';
import { Image } from '@chakra-ui/react'
import  CTLogo from'../../assets/logo-header.svg'
import './profile.css'


function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <div id='experience'>
            <Container centerContent>
            <Text fontWeight="bold" color="gray.400" fontSize="md" mt="5">What skills I have </Text>
            <Text fontWeight="bold" fontSize="2xl">My Experience </Text>
            </Container>
            <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
                maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
                <Box alignSelf="center" px="32" py="16">
                    <Heading fontWeight="extrabold" color="cyan.500" size="3xl">
                        Education
                    </Heading>
                    <Text fontSize="2xl">Web Development Bootcamp</Text>
                    <Text fontSize='large' color="gray.400">Coding Temple</Text><Image src="../assets./logo-header.svg"/>
                    <Text fontSize="2xl">Responsive Web Design</Text>
                    <Text fontSize='large' color="gray.400">Codecademy</Text>
                </Box>

                <Box alignSelf="center" px="0" py="5">
                    
                    <Container centerContent>
                        <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >

                            <Flex className="boxes" id="boxes" boxShadow='2xl' rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0} 
                                bg="gray.100" h="45vh" w="35vh" justify="flex-end" _hover={{ bg: "cyan.200", cursor: "pointer", boxShadow:"inner"}} centerContent>
                                    <Container centerContent id='notbox'>
                                    <Text color="black" fontSize="xl" fontWeight="bold" mb="4" centerContent>
                                    Frontend Development
                                    </Text>
                                    </Container>
                                    <Flex p="1"><Icon as={FaHtml5} w="10" h="10" /><Text>HTML</Text></Flex>
                                    <Flex p="1"><Icon as={FaCss3Alt} w="10" h="10" /><Text>CSS</Text></Flex>
                                    <Flex p="1"><Icon as={FaJsSquare} w="10" h="10" /><Text>Javscript</Text></Flex>
                                    <Flex p="1"><Icon as={FaReact} w="10" h="10" /><Text>React</Text></Flex>
                                    <Flex p="1"><Icon as={SiRedux} w="10" h="10" /><Text>Redux</Text></Flex>
                                    <Flex p="1"><Icon as={FaBootstrap} w='10' h='10' /><Text>Bootstrap</Text></Flex>
                            </Flex>

                            <Flex className="boxes" id='boxes' boxShadow='2xl' rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                                bg="gray.100" h="45vh" w="35vh" justify="flex-end"
                                _hover={{ bg: "green.400", cursor: "pointer", boxShadow:"inner" }}>
                                <Flex pl="2" pb="10"><Icon as={FaPython} w="10" h="10"/><Text>Python</Text></Flex>
                                <Flex pl="2" pb="5" pt="5"><Icon as={SiFlask} w="10" h="10"/><Text>Flask</Text></Flex>
                                <Flex pl="2" pt="10"><Icon as={SiPostgresql} w="10" h="10"/><Text>PostgreSQL</Text></Flex>
                                <Text color="black" p="4" fontSize="xl" fontWeight="bold" centerContent>
                                    Backend Development
                                </Text>
                            </Flex>
                        </Flex>
                    </Container>

                </Box>
            </Flex>
        </div>
    )
}

export default Profile
