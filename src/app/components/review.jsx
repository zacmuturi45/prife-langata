import Image from 'next/image'
import React from 'react'
import { star } from '../../../public/imports'

export default function Review({ text, name, index }) {
    return (
        <div key={index} className='review-main'>
            <div className="review-container">
                <div className="container-one">
                    <div className="stars">
                        <Image src={star} width={20} height={20} alt='star-svg' />
                        <Image src={star} width={20} height={20} alt='star-svg' />
                        <Image src={star} width={20} height={20} alt='star-svg' />
                        <Image src={star} width={20} height={20} alt='star-svg' />
                        <Image src={star} width={20} height={20} alt='star-svg' />
                    </div>
                    <p>Google Reviews</p>
                </div>

                <div className="container-two">
                    {text}
                </div>
                <div className="container-three">
                    {name}
                </div>
            </div>
        </div>
    )
}
