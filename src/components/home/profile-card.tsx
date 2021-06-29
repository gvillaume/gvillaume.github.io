import React from 'react'
import { Flex, Image, Heading, Text } from '@chakra-ui/react'

import George from '~images/me/profile.png'

const ProfileCard: React.FC = () => {
    return (
        <Flex
            flexDirection="column"
            justify="space-evenly"
            align="center"
            shadow="2xl"
            style={{
                backdropFilter: 'blur(12.5px)',
            }}
            p={10}
            borderRadius={20}
            border="1px solid rgba(255, 255, 255, 0.18)"
            position="relative"
        >
            <Image src={George} boxSize="240px" />
            <Heading color="white" pb={2} textAlign="center">
                George Villaume
            </Heading>
            <Text color="white" textAlign="center">
                UI/UX Entheusiast | React User
            </Text>
        </Flex>
    )
}

export default ProfileCard
