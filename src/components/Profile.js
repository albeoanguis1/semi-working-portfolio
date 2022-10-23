import React from 'react'
import { useMediaQuery } from '@chakra-ui/media-query';
import { Box, Flex, Heading, Text } from '@chakra-ui/layout';
import { Container } from '@chakra-ui/layout';
import Icon from '@chakra-ui/icon';
import { DiCodeigniter, DiAndroid, DiWebplatform } from 'react-icons/di'
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaGit, FaJsSquare, FaBootstrap } from 'react-icons/fa'
import { SiPostgresql, SiTypescript , SiRedux, SiFlask } from 'react-icons/si';
import { Image } from '@chakra-ui/react'
import  CTLogo from'../assets/logo-header.svg'


function Profile() {

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");


    return (
        <>
        <Text fontWeight="bold" color="gray.400" fontSize="md" mt="5">What skills I have </Text>
        <Text fontWeight="bold" fontSize="2xl">My Experience </Text>
        <Flex direction={isNotSmallerScreen ? "row" : "column"} w="100%"
            maxWidth={{ base: "100vh", md: "130vh", lg: "130vh", xl: "130vh" }}>
            <Box alignSelf="center" px="32" py="16">
                <Heading fontWeight="extrabold" color="cyan.500" size="4xl">
                    Education
                </Heading>
                <Text fontSize="2xl">Web Development Bootcamp</Text>
                <Text fontSize='large' color="gray.400">Coding Temple</Text><Image src="../assets./logo-header.svg"/>
                <Text fontSize="2xl">Responive Web Design</Text>
                <Text fontSize='large' color="gray.400">Codecademy</Text>
            </Box>

            <Box alignSelf="center" px="20" py="20">
                
                <Container centerContent>
                    <Flex direction={isNotSmallerScreen ? "row" : "column"} mt={8} >
                        <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                            bg="gray.100" h="30vh" w="30vh" justify="flex-end" _hover={{ bg: "cyan.200", }}>
                                <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                                Frontend Development
                                </Text>
                                <Flex><Icon as={FaHtml5} w="10" h="10" /><Text>HTML</Text></Flex>
                                <Flex><Icon as={FaCss3Alt} w="10" h="10" /><Text>CSS</Text></Flex>
                                <Flex><Icon as={FaJsSquare} w="10" h="10" /><Text>Javscript</Text></Flex>
                                <Flex><Icon as={FaReact} w="10" h="10" /><Text>React</Text></Flex>
                                <Flex><Icon as={SiRedux} w="10" h="10" /><Text>Redux</Text></Flex>
                                <Flex><Icon as={FaBootstrap} w='10' h='10' /><Text>Bootstrap</Text></Flex>
                            
                        </Flex>

                        <Flex rounded="xl" direction="column" mt={4} ml={isNotSmallerScreen ? 4 : 0}
                            bg="gray.100" h="30vh" w="30vh" justify="flex-end"
                            _hover={{ bg: "green.400", }}>
                            <Flex><Icon as={FaPython} w="10" h="10"/><Text>Python</Text></Flex>
                            <Flex><Icon as={SiFlask} w="10" h="10"/><Text>Flask</Text></Flex>
                            <Flex><Icon as={SiPostgresql} w="10" h="10"/><Text>PostgreSQL</Text></Flex>
                            <Text color="black" p="4" fontSize="xl" fontWeight="semibold">
                                Backend Development
                            </Text>
                        </Flex>
                    </Flex>
                </Container>

            </Box>
        </Flex>
        </>
    )
}

export default Profile
