"use client"

import React from 'react'
import { facebook, fb, insta, products, tiktok, yt } from '../../../public/imports'
import Image from 'next/image'

export default function ProductDetail({ params }) {
    const id = params.product
    const product = products.find((p) => p.product_id === id)
    if (!product) {
        return <div className='product-notfound'>Product not found.</div>
    }

    return (
        <div className='product-main'>
            <div className="product-container">
                <div className='product-image'>
                    <Image src={product.product_image} width={100} height={100} alt='product-image' unoptimized={true} />
                </div>

                <div className='product-detail'>
                    <div className="price">{`Kshs ${product.price}`}</div>
                    <div className="product-name">{product.product_name}</div>
                    <div className="product-description">{product.product_description}</div>
                    <div className="product-button"><button>Add to Cart</button></div>
                    <div className="share">
                        <p>Share:</p>
                        <div className="share-svg">
                            <Image src={facebook} width={20} height={20} alt='fb-svg' />
                            <Image src={insta} width={20} height={20} alt='fb-svg' />
                            <Image src={tiktok} width={20} height={20} alt='fb-svg' />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
