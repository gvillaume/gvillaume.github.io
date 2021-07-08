import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Box } from '@chakra-ui/react'

const RotateBox = motion(Box)

const RotatingText: React.FC = () => {
    const [current, setCurrent] = useState(0)
    const content = [
        {
            word: 'Co-Founder.',
            color: 'linear(to-r, #ff220a, #ff7f17)',
        },
        {
            word: 'UI/UX Designer.',
            color: 'linear(to-r, #00ff84, #e5ff00)',
        },
        {
            word: 'React Developer.',
            color: 'linear(to-r, #0770fa, #07b1fa)',
        },
        {
            word: '3D Artist.',
            color: 'linear(to-r, #ff6f08, #ffca0a)',
        },
        {
            word: 'Musician.',
            color: 'linear(to-r, #6506FF, #C14BFF)',
        },
    ]

    useEffect(() => {
        setTimeout(
            () =>
                current < content.length - 1
                    ? setCurrent(current + 1)
                    : setCurrent(0),
            3000
        )
    }, [current])

    return (
        <AnimatePresence>
            {content.map((content, i) => (
                <>
                    {current === i && (
                        <RotateBox
                            as="span"
                            display="inline-block"
                            w="13ch"
                            bgGradient={content.color}
                            bgClip="text"
                            key={i}
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: 20, opacity: 0 }}
                        >
                            {content.word}
                        </RotateBox>
                    )}
                </>
            ))}
        </AnimatePresence>
    )
}

export default RotatingText
