import Image from 'next/image'
import React from 'react'
import { blfam, blfam2, blfam3, blfam4 } from '../../../public/imports'

export default function Gallery() {
    return (
        <div className='gallery-main'>
            <div className="gallery-container">
                <div className="imgdiv">
                    <div><Image src={blfam} width={100} height={100} alt='gallery-image' unoptimized /></div>
                </div>

                <div className="imgdiv">
                    <div><Image src={blfam2} width={100} height={100} alt='gallery-image' unoptimized /></div>
                </div>

                <div className="imgdiv">
                    <div><Image src={blfam} width={100} height={100} alt='gallery-image' unoptimized /></div>
                </div>

                <div className="imgdiv">
                    <div><Image src={blfam2} width={100} height={100} alt='gallery-image' unoptimized /></div>
                </div>
            </div>
        </div>
    )
}
