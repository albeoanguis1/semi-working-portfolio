import Icon from '@chakra-ui/icon'
import { HStack } from '@chakra-ui/layout'
import React from 'react'
import { FaPython, FaReact, FaHtml5, FaCss3Alt, FaGit, FaJsSquare } from 'react-icons/fa'
import { SiPostgresql, SiTypescript , SiRedux } from 'react-icons/si';

function Social() {
    return (
        <HStack spacing="100">
            <Icon as={FaPython} boxSize="50" />
            <Icon as={FaReact} boxSize="50" />
            <Icon as={FaHtml5} boxSize="50" />
            <Icon as={FaCss3Alt} boxSize="50" />
            <Icon as={FaGit} boxsize="50" />
            <Icon as={SiPostgresql} boxSize="50" />
            <Icon as={FaJsSquare} boxSize="50" />
            <Icon as={SiTypescript} boxSize="50" />
            <Icon as={SiRedux} boxSize="50" />
        </HStack>
    )
}

export default Social
