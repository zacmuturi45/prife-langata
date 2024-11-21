"use client"

import Image from 'next/image'
import React from 'react'
import { contact, turf, wall6, wallpanel } from '../../../public/imports'
import { useCart } from '../contexts/cartContext'
import { useRouter } from 'next/navigation'

export default function Featured() {
    const { setSelectedCategory, setSortBy } = useCart();
    const router = useRouter();

    return (
        <div className='featured-main'>
            <div className="featured-container">
                <h2>Main Categories</h2>
                <div className="featured-products">
                    <div>
                        <Image src={wall6} width={100} height={100} alt='wallpaper' unoptimized={true} className='product-image' />
                        <div className="absdiv" onClick={() => {
                            router.push("/shop")
                            setSortBy("Wallpaper")
                            setSelectedCategory("Wallpaper")
                        }}><div className="wallp">Wallpapers</div></div>
                        <p>Wallpapers</p>
                    </div>


                    <div>
                        <Image src={turf} width={100} height={100} alt='wall-panel' unoptimized={true} className='product-image' />
                        <div className="absdiv" onClick={() => {
                            router.push("/shop")
                            setSortBy("Grass Turf")
                            setSelectedCategory("Grass Turf")
                        }}><div className="wallp">Grass turf</div></div>
                        <p>Grass turf</p>
                    </div>

                    <div>
                        <Image src={contact} width={100} height={100} alt='carpets' unoptimized={true} className='product-image' />
                        <div className="absdiv" onClick={() => {
                            router.push("/shop")
                            setSortBy("Contact Paper")
                            setSelectedCategory("Contact Paper")
                        }}><div className="wallp">Contact Paper</div></div>
                        <p>Contact Paper</p>
                    </div>

                    <div>
                        <Image src={wallpanel} width={100} height={100} alt='contact-paper' unoptimized={true} className='product-image' />
                        <div className="absdiv" onClick={() => {
                            router.push("/shop")
                            setSortBy("Wall Panel")
                            setSelectedCategory("Wall Panel")
                        }}><div className="wallp">Wall Panels</div></div>
                        <p>Wall Panel</p>
                    </div>

                    <div>
                        <Image src={wallpanel} width={100} height={100} alt='contact-paper' unoptimized={true} className='product-image' />
                        <div className="absdiv"><div className="wallp">Marble Sheet</div></div>
                        <p>Marble Sheet</p>
                    </div>

                </div>
            </div>
        </div>
    )
}
