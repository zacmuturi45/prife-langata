import Image from 'next/image'
import React from 'react'

export default function Conditions({ image, text, key }) {
  return (
    <div className='conditions-card-main' key={key}>
        <Image src={image} width={100} height={100} unoptimized alt='family-image' className='img' />
        <div className='pdiv'>
            <p>{text}</p>
        </div>
    </div>
  )
}
