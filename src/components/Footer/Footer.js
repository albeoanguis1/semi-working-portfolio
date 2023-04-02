import { Container, Box, Flex, Wrap, VStack, HStack } from '@chakra-ui/react';
import React, { useState } from "react";
import { Link } from "react-scroll"
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { IconButton} from '@chakra-ui/button'
import './footer.css';

function Footer() {
    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)

  return (
    
        <Container centerContent m="0" pt="20" pb="20">
            {/* <Box >
                <HStack p="5">
                    <Flex p="2" ><Link className="link" to="/" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}><a>Home</a></Link></Flex>
                    <Flex p="2"><Link className="link" to="experience" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}><a>Experience</a></Link></Flex>
                    <Flex p="2"><Link className="link" to="portfolio" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}><a>Portfolio</a></Link></Flex>
                    <Flex p="2"><Link className="link" to="contact" spy={true} smooth={true} offset={-100} duration={500} onClick={closeMenu}><a>Contact</a></Link></Flex>
                </HStack>
            </Box> */}
            <Box p="5" className="footer__socials">
                <a href="https://www.linkedin.com/in/antoniopopoca001/" target="_blank" rel="noreferrer" ><IconButton mr="5" as={FaLinkedinIn} p="2" m="1" isRound='true'/></a>
                <a href="https://github.com/albeoanguis1" target="_blank" rel="noreferrer" ><IconButton ml="5" p="2" m="1" as={FaGithub} isRound="true" /></a>
            </Box>
            <Box id="copyrightbox" pt="5" className="footer__copyright">
                <center>
                    <small id="small">&copy; Antonio Popoca 2023. All rights reserved.</small><br></br>
                    <small id="small">This website was built with ReactJS, ChakraUI, and Bootstrap, with love.</small>
                </center>
            </Box>
        </Container>

  )
}

export default Footer