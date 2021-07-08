import React from 'react'
import { Center, Text, Image, VStack } from '@chakra-ui/react'

import GradientText from '~components/shared/gradient-text'
import SocialLinks from '~components/shared/social-links'

import George from '~images/me/brofist.png'

const Footer: React.FC = () => {
    return (
        <Center flexDir="column" w="100vw" h="50vh">
            <VStack>
                <Image src={George} boxSize="96px" />
                <Text fontWeight={600}>
                    <GradientText>George Villaume</GradientText>
                </Text>
                <Text>Thank you for reading!</Text>
                <Text>Reach out to me if you want to talk 👇</Text>
                <SocialLinks />
            </VStack>
        </Center>
    )
}

export default Footer
