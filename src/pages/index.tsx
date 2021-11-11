import React from 'react'
import { Box } from '@chakra-ui/react'

import Sidebar from '~components/shared/sidebar'
import HomeView from '~components/home/home-view'
import Footer from '~components/shared/footer'

const IndexPage = () => {
    return (
        <>
            <Box bg="black" color="white">
                <HomeView />
                <Footer />
            </Box>
            <Sidebar />
        </>
    )
}

export default IndexPage
