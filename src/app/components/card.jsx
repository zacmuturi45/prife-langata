"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { prife } from '../../../public/imports'
import Link from 'next/link'


export default function Card({ product_brief, product_image, product_name, price, key, product_id, product_description, current_stock }) {


    return (
        <div className='card-main' key={key}>
            <Link href={`${product_id}`} style={{textDecoration: "none"}}>
                <div className="card-image">
                    <Image src={product_image} height={100} width={100} alt='product_image' unoptimized={true} className='product_image' />
                </div>
                <div className="card-detail">
                    <div className="card-detail-name">{product_name}</div>
                    <div className="card-detail-brief">{product_brief}</div>
                    <div className="card-detail-logo">
                        <Image src={prife} height={50} width={80} alt='lwg-logo' />
                        <div className="cart-button"><button>Add to Cart</button></div>
                    </div>
                </div>
            </Link>
        </div>
    )
}
