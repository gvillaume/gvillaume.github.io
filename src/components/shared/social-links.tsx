import React from 'react'
import { Flex } from '@chakra-ui/react'
import { IconType } from 'react-icons'
import { FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'
import { motion } from 'framer-motion'

const SocialLinks = () => {
    return (
        <Flex w="124px" justify="space-between">
            <Social
                Icon={FiLinkedin}
                link="https://linkedin.com/in/george-villaume"
            />
            <Social
                Icon={FiTwitter}
                link="https://twitter.com/georgevillaume"
            />
            <Social Icon={FiGithub} link="https://github.com/gvillaume" />
        </Flex>
    )
}

const Social: React.FC<{ Icon: IconType; link: string }> = ({ Icon, link }) => {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noreferrer noopener"
            whileHover={{ scale: 1.1 }}
        >
            <Icon style={{ width: '28px', height: '28px' }} />
        </motion.a>
    )
}

export default SocialLinks
