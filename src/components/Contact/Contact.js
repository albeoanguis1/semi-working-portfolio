import React, {useState, useRef} from 'react';
import emailjs from '@emailjs/browser';
import { Container, Box, Flex, Wrap, VStack, HStack } from '@chakra-ui/react';
import { Heading, Text } from '@chakra-ui/layout';
import './contact.css'

import { MdOutlineEmail } from 'react-icons/md';
// import './contact.css';

function Contact() {

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_psjxj5f', 'template_r6fjq1t', form.current, '4uKwlccWKDWkoBNhg')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
      }, (error) => {
          console.log(error.text);
      });
  };



    return (
        <div id='contact'>
        <Container centerContent mb="10">
            <Text fontWeight="bold" color="gray.400" fontSize="md" mt="5">Get in touch </Text>
            <Text fontWeight="bold" fontSize="2xl">Contact Me </Text>
        </Container>
        <Container>
        <form ref={form} onSubmit={sendEmail}>
            <Box p="2">Name<Box><input id="input" border="1px" type="text" name="user_name" /></Box></Box>
            <Box p="2">Email<Box><input id="input" type="email" name="user_email" /></Box></Box>
            <Box p="2">Message<Box><textarea id="input" name="message" /></Box></Box>
            <Box p="2">
                <input className="submit" type="submit" value="Send" />
            </Box>
        </form>
        </Container>
      </div>
    );
  };
  
  export default Contact;