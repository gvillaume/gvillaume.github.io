import React from 'react'
import { Box, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'

import { MenuToggle } from './menu-toggle'

const Container = motion(Flex)

const sidebar = {
    open: {
        borderRadius: '10px',
        width: '100%',
        height: '100%',
        transition: {
            stiffness: 50,
        },
    },
    closed: {
        borderRadius: '50%',
        width: '40px',
        height: '40px',
        transition: {
            borderRadius: { delay: 0.2 },
        },
    },
}

const Sidebar = () => {
    const [open, setOpen] = React.useState(false)

    return (
        <Box
            p={4}
            position="fixed"
            top="0"
            left="0"
            height="100vh"
            w={['100vw', '20vw']}
        >
            <Container
                p={8}
                position="relative"
                background="rgba(0, 0, 0, 0.18)"
                boxShadow="xl"
                backdropFilter="blur(8px)"
                webkitBackdropFilter="blur(4px)"
                border="1px solid rgba(255, 255, 255, 0.18)"
                color="white"
                animate={open ? 'open' : 'closed'}
                variants={sidebar}
            >
                <Box position="absolute" top={'22px'} left={'21px'}>
                    <MenuToggle toggle={() => setOpen(!open)} />
                </Box>
            </Container>
        </Box>
    )
}

export default Sidebar
