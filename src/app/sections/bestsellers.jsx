import React from 'react'
import { stock, wall10, wall11, wall6, wall7, wall8, wall9 } from '../../../public/imports'
import Card from '../components/card'
import Link from 'next/link'

export default function BestSellers() {
    const bestSellerArray = [
        { product_image: wall8, product_name: "Deep Blue", price: 1500, product_category: "Wallpaper", id: "wp1" },
        { product_image: wall9, product_name: "Chequered black", price: 1500, product_category: "Wallpaper", id: "wp2" },
        { product_image: wall10, product_name: "Luxury White", price: 1500, product_category: "Wallpaper", id: "wp3" },
        { product_image: wall11, product_name: "Wallpaper", price: 1500, product_category: "Wallpaper", id: "wp4" },
    ]
    return (
        <div className='bestSeller-main'>
            <div className="bs-container">
                <h2>Featured</h2>
                <div className="cards">
                    {
                        bestSellerArray.map((item) => (
                            <Card product_image={item.product_image} product_name={item.product_name} price={item.price} index={item.id} product={item} product_category={item.product_category} />
                        ))
                    }
                </div>
                <div className="button-div">
                    <Link href={"/shop"} style={{textDecoration: "none"}}>
                        <button>
                            View all
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
