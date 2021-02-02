import React from 'react'
import PropTypes from 'prop-types'
import { ChakraProvider } from '@chakra-ui/react'

import { theme } from '~config/theme'
import Fonts from '~config/fonts'

const WrapRootElement = ({ element }) => {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            {element}
        </ChakraProvider>
    )
}

WrapRootElement.propTypes = {
    element: PropTypes.element,
}

export default WrapRootElement
