import React from 'react'
import { Box } from '@chakra-ui/react'

import HomeView from '~components/home/home-view'
import Footer from '~components/shared/footer'

const IndexPage = () => {
    return (
        <Box
            bgGradient="linear(to-t, #000, #121212 75%, #1d1d1d 100%)"
            color="white"
        >
            <HomeView />
            <Footer />
        </Box>
    )
}

export default IndexPage
