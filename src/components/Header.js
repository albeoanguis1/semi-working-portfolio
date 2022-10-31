import { Button } from '@chakra-ui/button';
import { useColorMode } from '@chakra-ui/color-mode'
import { Image } from '@chakra-ui/react';
import { Stack, Circle, Flex, Box, Text } from '@chakra-ui/layout';
import { useMediaQuery } from '@chakra-ui/media-query';
import React from 'react'
import Type from './Type';
import ME from '../me.jpg';



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
                    <Text color={isDark ? "gray.200" : "gray.500"}>A full stack software Developer. I enjoy finding solutions to make a website look great and perform well.</Text>
                    {/* change this button later to download CV */}
                    <Button mt={8} colorScheme="blue" onClick={() =>
                        window.open("https://www.linkedin.com/in/antoniopopoca001/")
                    }>Hire Me</Button>
                   
                </Box>
                <Image alignSelf="center" mt={isNotSmallerScreen ? "0" : "12"}
                    mb={isNotSmallerScreen ? "0" : "12"} borderRadius='full'
                    backgroundColor="white" boxShadow="dark-lg"
                    boxSize="300px" src={ME} zIndex={-1}/>
            </Flex>

        </Stack>
    )
}

export default Header
