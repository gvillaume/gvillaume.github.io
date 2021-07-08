import React from 'react'
import { Box } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const SpanBox = motion(Box)

const GradientText: React.FC<{ children: React.ReactNode }> = ({
    children,
}) => {
    return (
        <SpanBox
            as="span"
            animate={{
                backgroundImage: [
                    'linear-gradient(90deg, #FF0000, #F0861E)',
                    'linear-gradient(90deg, #F0861E, #FFBB07)',
                    'linear-gradient(90deg, #FFBB07, #FFFB45)',
                    'linear-gradient(90deg, #FFFB45, #3EFCCD)',
                    'linear-gradient(90deg, #3EFCCD, #3ED1FC)',
                    'linear-gradient(90deg, #3ED1FC, #6506FF)',
                    'linear-gradient(90deg, #6506FF, #C14BFF)',
                    'linear-gradient(90deg, #C14BFF, #FF0000)',
                    'linear-gradient(90deg, #FF0000, #F0861E)',
                ],
            }}
            transition={{
                repeat: Infinity,
                duration: 8,
                ease: 'linear',
            }}
            bgClip="text"
        >
            {children}
        </SpanBox>
    )
}

export default GradientText
