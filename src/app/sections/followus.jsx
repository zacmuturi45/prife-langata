import Image from 'next/image'
import React from 'react'
import { inst1, inst2, inst3, inst4, inst5, inst6, inst7, inst8, insta, instawhite, stock, wall1, wall2, wall3, wall4, wall5 } from '../../../public/imports'

export default function FollowUs() {
    return (
        <div className='follow-main'>
            <div className="follow-container">
                <h2>Follow us on Instagram</h2>
                <div className="follow-products">
                    <div>
                        <Image src={inst1} width={100} height={100} alt='wallpaper' unoptimized={true} className='product-image' />
                        <div className="insta"><Image src={instawhite} width={25} height={25} alt='instagram-svg' /></div>
                    </div>


                    <div>
                        <Image src={inst2} width={100} height={100} alt='wall-panel' unoptimized={true} className='product-image' />
                        <div className="insta"><Image src={instawhite} width={25} height={25} alt='instagram-svg' /></div>

                    </div>

                    <div>
                        <Image src={inst3} width={100} height={100} alt='carpets' unoptimized={true} className='product-image' />
                        <div className="insta"><Image src={instawhite} width={25} height={25} alt='instagram-svg' /></div>

                    </div>

                    <div>
                        <Image src={inst4} width={100} height={100} alt='contact-paper' unoptimized={true} className='product-image' />
                        <div className="insta"><Image src={instawhite} width={25} height={25} alt='instagram-svg' /></div>

                    </div>

                    <div>
                        <Image src={inst5} width={100} height={100} alt='contact-paper' unoptimized={true} className='product-image' />
                        <div className="insta"><Image src={instawhite} width={25} height={25} alt='instagram-svg' /></div>

                    </div>

                    <div>
                        <Image src={inst6} width={100} height={100} alt='contact-paper' unoptimized={true} className='product-image' />
                        <div className="insta"><Image src={instawhite} width={25} height={25} alt='instagram-svg' /></div>

                    </div>

                    <div>
                        <Image src={inst7} width={100} height={100} alt='contact-paper' unoptimized={true} className='product-image' />
                        <div className="insta"><Image src={instawhite} width={25} height={25} alt='instagram-svg' /></div>

                    </div>

                    <div>
                        <Image src={inst8} width={100} height={100} alt='contact-paper' unoptimized={true} className='product-image' />
                        <div className="insta"><Image src={instawhite} width={25} height={25} alt='instagram-svg' /></div>

                    </div>

                </div>
            </div>
        </div>
    )
}
