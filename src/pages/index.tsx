import React from 'react'
import { Box, Image } from '@chakra-ui/react'

import Sidebar from '~components/shared/sidebar'
import HomeView from '~components/home/home-view'
import Footer from '~components/shared/footer'

import Ribbons from '~images/background/ribbons.svg'

const IndexPage = () => {
    return (
        <>
            <Box bg="black" color="white">
                <HomeView />

                <Image src={Ribbons} w="100vw" h="auto" />
                <Footer />
            </Box>
            <Sidebar />
        </>
    )
}

export default IndexPage
