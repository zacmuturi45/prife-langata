"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { useCart } from '../contexts/cartContext'

export default function CartItem({ updateItemTotal, product_category, product_name, price, product_image, index, updateWhatsappMessage }) {
    const { removeFromCart } = useCart();
    const [quantity, setQuantity] = useState(1)
    const [total, setTotal] = useState(0)

    useEffect(() => {
        const itemTotal = price*quantity
        setTotal(itemTotal)
        updateItemTotal(index, itemTotal)
        updateWhatsappMessage(product_name, quantity)
        
    }, [quantity])

    const handleQuantities = (operation) => {
        setQuantity(prevQuantity => 
            operation === "add" ? prevQuantity + 1 : Math.max(1, prevQuantity - 1)
        )
    }




  return (
    <div className='cartitem-main' key={index}>
        <div className='cartitem-one'>
            <div className='image-div'><Image src={product_image} width={50} height={50} alt='product-image' unoptimized={true} /></div>
            <div className='textdiv'>
                <p style={{fontWeight: "bold"}}>{product_category}</p>
                <p>{product_name}</p>
                <p style={{fontWeight: "bold", color: "orange"}}>Kshs <span>{price}</span></p>
            </div>
        </div>

        <div className="cart-customs">

        <div className='cartitem-two'>
            <span onClick={() => handleQuantities("minus")}>-</span><span className='spanOne'>{quantity}</span><span onClick={() => handleQuantities("add")}>+</span>
        </div>

        <div className='cartitem-three'>
            <p><span>Kshs</span>{total}</p>
        </div>

        <div className='cartitem-four'>
            <span onClick={() => removeFromCart(index)}>Remove</span>
        </div>
        </div>
    </div>
  )
}
