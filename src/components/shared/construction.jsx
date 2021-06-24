import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Flex, Box, Text, Heading, Link } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'

const Construction = () => {
    return (
        <Flex direction="column" align="center" justify="space-evenly" h="60%">
            <Box w="350px" h="350px">
                <StaticImage
                    src="../../images/construction.png"
                    placeholder="tracedSVG"
                    tracedSVGOptions={{
                        color: '#b8ccde',
                    }}
                    layout="fullWidth"
                />
            </Box>
            <Heading>This site is currently under construction</Heading>
            <Text fontSize="xl">Come back soon to see the results!</Text>
            <Flex w="124px" justify="space-between">
                <motion.a
                    href="https://www.linkedin.com/in/george-villaume/"
                    target="_blank"
                    rel="noreferrer noopener"
                    isExternal
                    whileHover={{ scale: 1.1 }}
                >
                    <FiLinkedin style={{ width: '28px', height: '28px' }} />
                </motion.a>
                <motion.a
                    href="https://twitter.com/georgevillaume"
                    target="_blank"
                    rel="noreferrer noopener"
                    isExternal
                    whileHover={{ scale: 1.1 }}
                >
                    <FiTwitter style={{ width: '28px', height: '28px' }} />
                </motion.a>
                <motion.a
                    href="https://github.com/gvillaume"
                    target="_blank"
                    rel="noreferrer noopener"
                    isExternal
                    whileHover={{ scale: 1.1 }}
                >
                    <FiGithub style={{ width: '26px', height: '26px' }} />
                </motion.a>
            </Flex>
        </Flex>
    )
}

export default Construction
