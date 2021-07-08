import React from 'react'
import { Center, Image, Heading, VStack, HStack } from '@chakra-ui/react'

import RotatingText from '~components/home/rotating-text'
import George from '~images/me/profile.png'

const HomeView = () => {
    return (
        <Center w="100vw" h="80vh" position="relative">
            <HStack spacing={32}>
                <Image src={George} boxSize="280px" />
                <VStack align="left">
                    <Heading fontSize="42px">
                        Hello! I'm George Villaume,
                    </Heading>
                    <Heading fontSize="42px">
                        and I'm a <RotatingText />
                    </Heading>
                </VStack>
            </HStack>
        </Center>
    )
}

export default HomeView
