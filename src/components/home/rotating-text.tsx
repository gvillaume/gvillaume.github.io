import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Box } from '@chakra-ui/react'

const RotateBox = motion(Box)

const RotatingText: React.FC = () => {
    const [current, setCurrent] = useState(0)
    const content = [
        {
            word: 'Co-Founder.',
            color: 'linear(to-b, #ff220a, #ff7f17)',
        },
        {
            word: 'UI/UX Designer.',
            color: 'linear(to-b, #00ff84, #e5ff00)',
        },
        {
            word: 'React Developer.',
            color: 'linear(to-b, #0770fa, #07b1fa)',
        },
        {
            word: '3D Artist.',
            color: 'linear(to-b, #ff6f08, #ffca0a)',
        },
        {
            word: 'Musician.',
            color: 'linear(to-b, #6506FF, #C14BFF)',
        },
    ]

    useEffect(() => {
        setTimeout(
            () =>
                current < content.length - 1
                    ? setCurrent(current + 1)
                    : setCurrent(0),
            4000
        )
    }, [current])

    return (
        <AnimatePresence>
            {content.map((content, i) => (
                <>
                    {current === i && (
                        <Box as="span" display="inline-block">
                            {content.word.split('').map((letter, index) => (
                                <RotateBox
                                    key={index}
                                    as="span"
                                    display="inline-block"
                                    bgGradient={content.color}
                                    bgClip="text"
                                    w={letter === ' ' ? '0.4ch' : 'auto'}
                                    initial={{
                                        y: -20,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        y: 0,
                                        opacity: 1,
                                        transition: { delay: 0.025 * index },
                                    }}
                                    exit={{
                                        y: 20,
                                        opacity: 0,
                                    }}
                                >
                                    {letter}
                                </RotateBox>
                            ))}
                        </Box>
                    )}
                </>
            ))}
        </AnimatePresence>
    )
}

export default RotatingText
