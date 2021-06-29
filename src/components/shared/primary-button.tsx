import React from 'react'
import { Button } from '@chakra-ui/react'

const PrimaryButton: React.FC<{ label: string }> = ({ label }) => {
    return <Button>{label}</Button>
}

export default PrimaryButton
