import React from 'react'
import { Box, Flex, Heading, Image } from '@chakra-ui/react'

import Ribbons from '~images/background/ribbons.svg'
import George from '~images/me/profile.png'

const HomeView = () => {
    return (
        <Flex
            w="100vw"
            h="95vh"
            align="center"
            justify="center"
            position="relative"
        >
            <Box position="absolute" top={0} width="100vw" height="100%">
                <Image
                    src={Ribbons}
                    width="100%"
                    height="100%"
                    objectFit="cover"
                    objectPosition="center"
                />
            </Box>
            <Flex
                flexDirection="column"
                align="center"
                shadow="xl"
                style={{ backdropFilter: 'blur(36px)' }}
                p={8}
                borderRadius={20}
                position="relative"
            >
                <Image src={George} boxSize="240px" />
                <Heading color="white">George Villaume</Heading>
            </Flex>
        </Flex>
    )
}

export default HomeView
