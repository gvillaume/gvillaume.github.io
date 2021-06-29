import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

const PrimaryImage: React.FC<{ img: string; alt: string }> = ({ img, alt }) => (
    <StaticImage
        src={img}
        alt={alt}
        placeholder="tracedSVG"
        tracedSVGOptions={{ color: '#b8ccde' }}
        layout="fullWidth"
    />
)

export default PrimaryImage
