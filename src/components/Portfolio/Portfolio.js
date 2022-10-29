import React from "react";
import { Flex, Heading, Text, Spacer } from '@chakra-ui/layout';
import { Container, Box, Center, ButtonGroup, Button, Image } from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import IMG1 from '../../assets/flask-project-logo.svg'
import IMG2 from '../../assets/artic.svg.png'

const Portfolio = () => {
    const soloProjects = [
      {
        id: 1,
        title: 'Bookstore',
        img: IMG1,
        description:
          'Backend Library application that allows users to store books securely using API calls to a Postgres database as well as authentication features.',
        technologies: 'Python | Flask | Jinja | PostgreSQL | Insomia',
        link: 'https://i-hate-flask.herokuapp.com/',
        github: 'https://github.com/albeoanguis1/i-hate-flask',
      },
    {
      id: 2,
      title:'Art Institute of Chicago API',
      img: IMG2,
      description:
        "A simple website using the Chicago Art Institue API to create an art gallery displaying my favorite paintings.",
      technologies: 'JavaScript | HTML | CSS',
      github: 'https://github.com/albeoanguis1/artic-api',
    },
    // add more projects here below
    ];
  
    return (
      <Container mb="10" id="portfolio">
        <section id="portfolio">
          <Container mb="10" centerContent>
            <Text fontSize="md" fontWeight="bold" color="gray.400">My Recent Work </Text>
            <Text fontSize="4xl" fontWeight="bold">Portfolio</Text>
          </Container>

          <Container border="1px" borderRadius="50" m="2" mb="20" p="5"  centerContent>
            {soloProjects.map((pro) => (
              <article key={pro.id}>
                <Box  >
                  <Image centerContent src={pro.img} alt={pro.title} boxSize="xsm" borderRadius="full" />
                </Box>
                <Container m="3" centerContent>
                  <Text fontSize="2xl" fontWeight="semibold">{pro.title}</Text>
                  <Text fontSize="md">{pro.description}</Text>
                  <Text fontWeight="semibold">{pro.technologies}</Text>
                </Container>
                <Container mb="5" centerContent>

                  <ButtonGroup>
                    <a href={pro.github}><Button>
                      GitHub 
                    </Button></a>
                    <a href={pro.link}><Button>
                      Visit Website
                    </Button></a>
                  </ButtonGroup>

                </Container>
              </article>
            ))}
          </Container>
        </section>
      </Container>
    );
  };
  
  export default Portfolio;