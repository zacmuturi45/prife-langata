"use client"

import Image from 'next/image'
import React, { useState } from 'react'
import { cart, cartimage, stock } from '../../../public/imports'
import { useCart } from '../contexts/cartContext'

export default function Card({ product_image, product_name, price, index, product_category, product }) {
    const { addToCart, cart, removeFromCart } = useCart();
    const [added, setAdded] = useState(false);

    return (
        <div className='card-main' key={index}>
            <div className="card-container">
                <div className="image">
                    <Image src={product_image} width={100} height={100} alt='product-image' className='img' unoptimized={true} />
                </div>
                <div className="card-info">
                    <h4 style={{ marginBottom: ".3rem" }}>{product_category}</h4>
                    <p style={{ fontSize: ".9rem", marginBottom: ".3rem" }}>{product_name}</p>
                    <div className="text">
                        <p>Kshs<span>{price}</span></p>
                        <div className="addtocartdiv"  onClick={() => {
                                const existing_product = cart.some(item => item.id === index)
                                if (!existing_product) {
                                    addToCart(product)
                                    setAdded(true)
                                } else {
                                    removeFromCart(index)
                                    setAdded(false)
                                }
                            }}>
                            <p>{added ? "Remove from cart" : "Add to cart"}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
