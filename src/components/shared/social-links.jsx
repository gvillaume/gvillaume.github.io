import React from 'react'
import { Flex, Link } from '@chakra-ui/react'
import { FiLinkedin, FiTwitter, FiGithub } from 'react-icons/fi'

const SocialLinks = () => {
    return (
        <Flex w="124px" justify="space-between">
            <Social Icon={<FiLinkedin />} link="" />
            <Social
                Icon={<FiTwitter />}
                link="https://twitter.com/georgevillaume"
            />
            <Social Icon={<FiGithub />} link="https://github.com/gvillaume" />
        </Flex>
    )
}

const Social = ({ Icon, link }) => {
    return (
        <Link href={link} isExternal>
            <Icon style={{ width: '28px', height: '28px' }} />
        </Link>
    )
}

export default SocialLinks
