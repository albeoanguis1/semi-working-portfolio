import React, { useState } from "react";
import { IconButton } from "@chakra-ui/button";
import { extendTheme } from '@chakra-ui/react'
import { Link } from "react-scroll"
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer, Box, Container } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import { AiOutlineHome } from 'react-icons/ai';
import { BiBook } from 'react-icons/bi';
import { RiServiceLine } from 'react-icons/ri';
import { BiMessageSquareDetail } from 'react-icons/bi';
import Header from "./components/Header";
import Portfolio from "./components/Portfolio/Portfolio";
import Profile from "./components/Profile";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import './components/app.css'


function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  const [activeNav, setActiveNav] = useState('#home');
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)
  const breakpoints = {
    sm: '320px',
    md: '768px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1536px',
  }

  const theme = extendTheme({ breakpoints })

  return (
    <VStack p={5}>
      <Flex w="100%" pos="fixed" >
        <Heading ml="8" size="md" fontWeight='semibold' color="cyan.400">
          ImAP
        </Heading>
        <Spacer></Spacer>
        <Flex className="navbar">
          <Box backgroundColor='cyan.300' borderRadius='100' p="1" pl="2" pr="2">
          <Link to="/" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}><IconButton className="btn" backgroundColor="cyan.300" as={AiOutlineHome} ml={2} isRound='true' p='2' m='1'/></Link>
          <Link to="experience" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}><IconButton className="btn" backgroundColor="cyan.300" as={BiBook} isRound='true' p='2' m='1' /></Link>
          <Link to="portfolio" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}><IconButton className="btn" backgroundColor="cyan.300" as={RiServiceLine} isRound='true' p='2' m='1' /></Link>
          <Link to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}><IconButton className="btn" backgroundColor="cyan.300" as={BiMessageSquareDetail} isRound='true' p='2' m='1' /></Link>
          </Box>
        </Flex>
        <Spacer></Spacer>
        <Box className="navBox">
        <a href="https://www.linkedin.com/in/antoniopopoca001/"><IconButton icon={<FaLinkedin />} isRound='true'></IconButton></a>
        <a href="https://www.instagram.com/antonio.popoca.photo/"><IconButton ml={2} icon={<FaInstagram />} isRound='true' ></IconButton></a>
        <a href="https://github.com/albeoanguis1"><IconButton ml={2} icon={<FaGithub />} isRound='true' ></IconButton></a>
        </Box>
        <IconButton ml={8}mr="5" icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Profile></Profile>
      <Portfolio></Portfolio>
      <Contact />
      <Footer />
    </VStack>
  );
}

export default App;
