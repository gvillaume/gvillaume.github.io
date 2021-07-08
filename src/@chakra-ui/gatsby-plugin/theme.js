import { extendTheme } from '@chakra-ui/react'
import '@fontsource/crimson-text'
import '@fontsource/poppins'
import '@fontsource/inter'
import '@fontsource/cabin'

const theme = {
    fonts: {
        heading: 'Inter',
        body: 'Inter',
    },
}

export default extendTheme(theme)
