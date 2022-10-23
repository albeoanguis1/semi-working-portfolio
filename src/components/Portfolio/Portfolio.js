import React from "react";
import { Flex, Heading, Text } from '@chakra-ui/layout';
import { Container, Box, Center, ButtonGroup, Button, Image } from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import IMG1 from '../../assets/flask-project-logo.svg'

const Portfolio = () => {
    const soloProjects = [
      {
        id: 1,
        title: 'Bookstore',
        img: IMG1,
        description:
          'Backend Library application that allows users to store books securely using API calls to a Postgres database as well as authentication features.',
        technologies: 'Python | Flask | Jinja | PostgreSQL',
        link: 'https://i-hate-flask.herokuapp.com/',
        github: 'https://github.com/albeoanguis1/i-hate-flask',
      }
    // ,
    // add more projects here below
    ];
  
    return (
      <Container>
        <section id="portfolio">
          <Container centerContent>
            <Text fontSize="md" fontWeight="bold" color="gray.400">My Recent Work </Text>
            <Text fontSize="4xl" fontWeight="bold">Portfolio</Text>
          </Container>

          <Container border="1px" borderRadius="50" m="2" centerContent>
            {soloProjects.map((pro) => (
              <article className="portfolio__item" key={pro.id}>
                <Box boxsize="sm" >
                  <Image src={pro.img} alt={pro.title} boxSize="sm" borderRadius="full" />
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