import React from 'react'
import { Box, Flex, Image } from '@chakra-ui/react'

import ProfileCard from '~components/home/profile-card'

import Ribbons from '~images/background/ribbons.svg'

const HomeView = () => {
    return (
        <Flex
            w="100vw"
            h="100vh"
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
            <ProfileCard />
        </Flex>
    )
}

export default HomeView
