import { IconButton } from "@chakra-ui/button";
import { useColorMode } from "@chakra-ui/color-mode";
import { Flex, VStack, Heading, Spacer } from "@chakra-ui/layout";
import { FaSun, FaMoon, FaInstagram, FaGithub, FaLinkedin } from 'react-icons/fa'
import Header from "./components/Header";
import Profile from "./components/Profile";
import Social from "./components/Social";

function App() {

  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  return (
    <VStack p={5}>
      <Flex w="100%">
        <Heading
          ml="8" size="md" fontWeight='semibold' color="cyan.400">ImAP</Heading>

        <Spacer></Spacer>
        <a href="https://www.linkedin.com/in/antoniopopoca001/"><IconButton icon={<FaLinkedin />} isRound='true'></IconButton></a>
        <a href="https://www.instagram.com/antonio.popoca.photo/"><IconButton ml={2} icon={<FaInstagram />} isRound='true' ></IconButton></a>
        <a href="https://github.com/albeoanguis1"><IconButton ml={2} icon={<FaGithub />} isRound='true' ></IconButton></a>
        <IconButton ml={8} icon={isDark ? <FaSun /> : <FaMoon />} isRound='true' onClick={toggleColorMode}></IconButton>
      </Flex>
      <Header></Header>
      <Profile></Profile>
    </VStack>
  );
}

export default App;
