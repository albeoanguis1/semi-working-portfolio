import React from "react";
import { Flex, Heading, Text, Spacer } from '@chakra-ui/layout';
import { Container, Box, Center, ButtonGroup, Button, Image, Link } from '@chakra-ui/react'
import './portfolio.css'
import IMG1 from '../../assets/flask-project-logo.svg'
import IMG2 from '../../assets/artic.svg.png'
import IMG3 from '../../assets/undraw_barbecue_3x93.svg'
import IMG4 from '../../assets/koala-logo.png'

const Portfolio = () => {
    const soloProjects = [
      {
        id: 1,
        title: 'Crispi, a restaurant recipe app',
        img: IMG3,
        description:
          'Backend Recipe application that allows users to search recipes using Spoonacular API, and to save hashed user information and recipes to a Postgres database.',
        technologies: 'Python | Flask | Jinja | PostgreSQL | Postman | Bootstrap',
        link: 'https://carnation-fallacious-yogurt.glitch.me/',
        github: 'https://github.com/albeoanguis1/crispi',
      },
      {
        id: 2,
        title: 'little library',
        img: IMG1,
        description:
          'Fullstack library application that allows users to store books securely using API calls to a Postgres database as well as authentication features. Uses built in API to access data and displays it in React for a seamless user experience.',
        technologies: 'React | Javascript | Redux | Python | Flask | Jinja | PostgreSQL',
        link: 'https://i-hate-flask.herokuapp.com/',
        github: 'https://github.com/albeoanguis1/i-hate-flask',
      },
    {
      id: 3,
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
        <section>
          <Container mb="10" centerContent>
            <Text fontSize="md" fontWeight="bold" color="gray.400">My Recent Work </Text>
            <Text fontSize="4xl" fontWeight="bold">Portfolio</Text>
          </Container>
          <Container border="1px" borderRadius="50" m="2" mb="20" p="5"  centerContent>

              <article>
                <Box>
                  <Image centerContent src={IMG3} alt={IMG3} boxSize="xsm" borderRadius="full" />
                </Box>
                <Container m="3" centerContent>
                  <Text fontSize="2xl" fontWeight="semibold">Crispi, a restaurant recipe app</Text>
                  <Text fontSize="md"> Backend Recipe application that allows users to search recipes using Spoonacular API, and to save hashed user information and recipes to a Postgres database.</Text>
                  <Text fontWeight="semibold">Python | Flask | Jinja | PostgreSQL | Postman | Bootstrap</Text>
                </Container>
                <Container mb="5" centerContent>
                  <ButtonGroup>
                  <a href="https://github.com/albeoanguis1/crispi" target="_blank" rel="noreferrer"><Button>Visit GitHub</Button></a>
                    <a href="https://carnation-fallacious-yogurt.glitch.me/"><Button>
                      Visit Website
                    </Button></a>
                  </ButtonGroup>
                </Container>
              </article>

              <article>
                <Box>
                  <Image centerContent src={IMG4} alt={IMG4} boxSize="xsm" borderRadius="full" />
                </Box>
                <Container m="3" centerContent>
                  <Text fontSize="2xl" fontWeight="semibold">Adequan Calculator 🤌</Text>
                  <Text fontSize="md">A simple calculator used in the day-to-day operations of a pharmacy to calculate the amount of boxes needed cover a day supply for a specific drug with special parameters, Adequan.</Text>
                  <Text fontWeight="semibold">Python | Flask | Jinja | Bootstrap | JavaScript</Text>
                </Container>
                <Container mb="5" centerContent>
                  <ButtonGroup>
                  <a href="https://github.com/albeoanguis1/adequan_calc" target="_blank" rel="noreferrer"><Button>Visit GitHub</Button></a>
                    <a href="https://pls-hire-me.onrender.com/"><Button>
                      Visit Website
                    </Button></a>
                  </ButtonGroup>
                </Container>
              </article>

              <article>
                <Box>
                  <Image centerContent src={IMG1} alt={IMG1} boxSize="xsm" borderRadius="full" />
                </Box>
                <Container m="3" centerContent>
                  <Text fontSize="2xl" fontWeight="semibold">little library</Text>
                  <Text fontSize="md">Fullstack library application that allows users to store books securely using API calls to a Postgres database as well as authentication features. Uses built in API to access data and displays it in React for a seamless user experience.</Text>
                  <Text fontWeight="semibold">React | Javascript | Redux | Python | Flask | Jinja | PostgreSQL</Text>
                </Container>
                <Container mb="5" centerContent>
                  <ButtonGroup>
                    <a href="https://github.com/albeoanguis1/v2-flask-library" target="_blank" rel="noreferrer"><Button>Visit GitHub</Button></a>
                    <a href="https://jungle-enormous-hydrant.glitch.me/"><Button>Visit Website</Button></a>
                  </ButtonGroup>
                </Container>
              </article>

              <article>
                <Box>
                  <Image centerContent src={IMG2} alt={IMG2} boxSize="xsm" borderRadius="full" />
                </Box>
                <Container m="3" centerContent>
                  <Text fontSize="2xl" fontWeight="semibold">Art Institute of Chicago API</Text>
                  <Text fontSize="md">A simple website using the Chicago Art Institue API to create an art gallery displaying my favorite paintings at ARTIC.</Text>
                  <Text fontWeight="semibold">JavaScript | HTML | CSS</Text>
                </Container>
                <Container mb="5" centerContent>
                  <ButtonGroup>
                    <a href="https://github.com/albeoanguis1/artic-api" target="_blank" rel="noreferrer"><Button>Visit GitHub</Button></a>
                    <a href="https://albeoanguis1.github.io/artic-api/"><Button>Visit Website</Button></a>
                  </ButtonGroup>
                </Container>
              </article>

          </Container>
        </section>
      </Container>
    );
  };
  
  export default Portfolio;