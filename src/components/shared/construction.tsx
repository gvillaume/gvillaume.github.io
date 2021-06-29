import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Flex, Box, Text, Heading } from '@chakra-ui/react'

import PrimaryImage from '~components/shared/primary-image'
import SocialLinks from '~components/shared/social-links'

const Construction = () => {
    return (
        <Flex direction="column" align="center" justify="space-evenly" h="60%">
            <Box w="350px" h="350px">
                <StaticImage
                    src="../../images/construction.png"
                    alt="Blob Heads SVG"
                    placeholder="tracedSVG"
                    tracedSVGOptions={{
                        color: '#b8ccde',
                    }}
                    layout="fullWidth"
                />
            </Box>
            <Heading align="center" fontSize={['lg', '2xl']}>
                This site is currently under construction
            </Heading>
            <Text fontSize={['md', 'xl']} textAlign="center">
                Come back soon to see the results!
            </Text>
            <SocialLinks />
        </Flex>
    )
}

export default Construction
