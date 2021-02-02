import { extendTheme } from '@chakra-ui/react'

const fonts = {
    body: 'Inter',
    heading: 'Inter',
}

const colors = {
    brand: {
        50: '#dff7ff',
        100: '#bce3f3',
        200: '#96cfe6',
        300: '#70bada',
        400: '#4aa7cf',
        500: '#308db5',
        600: '#226e8e',
        700: '#134f67',
        800: '#023040',
        900: '#00121a',
    },
}

export const theme = extendTheme({
    fonts: {
        body: 'Inter',
        heading: 'Inter',
    },
    colors: colors,
})
