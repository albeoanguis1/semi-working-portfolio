import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/react';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'
import Type from '../Type/Type';
import ME from '../../assets/me.jpg'
import resume from '../../assets/new_resume.pdf'



function Header() {

    const { colorMode } = useColorMode();
    const isDark = colorMode === "dark";

    const [isNotSmallerScreen] = useMediaQuery("(min-width:600px)");

    return (
        <Stack id="/">
            <Circle className="circle" position="absolute" bg="blue.200" opacity="0.3"
                w="300px" h="300px" alignSelf="flex-end" zIndex={-100} />
            <Flex direction={isNotSmallerScreen ? "row" : "column"}
                spacing="200px" p={isNotSmallerScreen ? "32" : "0"}
                alignSelf="flex-start">
                <Box mt={isNotSmallerScreen ? "0" : 16} align='flex-start'>
                    <Text fontSize="5xl" fontWeight="semibold">Hello, I'm</Text>
                    <Text fontSize="8xl" fontWeight="bold" bgGradient="linear(to-r, cyan.00, blue.600, purple.800)" bgClip='text' >Antonio Popoca</Text> 
                    <Text fontSize="5xl" fontWeight="bold" bgGradient="linear(to-r, gray.400, purple.400)" bgClip='text' > <Type /></Text>
                    <Text color={isDark ? "gray.200" : "gray.500"}>Full stack software Developer. I am passionate about blending client expectations with business goals to deliver excellent & profitable experiences. My goals are to improve the organizational efficiency, productivity, and overall success of various enterprises through effective technical and analytical support. In addition, I am interested in developing my skills and abilities to grow as a developer and person.</Text>
                    {/* change this button later to download CV */}
                    <a href={resume}><Button mt={8} colorScheme="blue">Hire Me</Button></a>
                   
                </Box>
                <Image id="me" alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="white" boxShadow="dark-lg"
                    boxSize="300px" src={ME} zIndex={-1}/>
            </Flex>

        </Stack>
    )
}

export default Header
