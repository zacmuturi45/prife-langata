import React from 'react'
import Card from '../components/card'
import { products } from '../../../public/imports'

export default function Shop() {
  return (
    <div className='shop-main'>
        <div className="shop-container">
            <div className="textbox">
                <h1>Your path to wellness starts here!</h1>
                <p>Discover a curated selection of health and wellness products designed to help you achieve optimal health and vitality. At Langata Wellness Clinic, we bring you innovative solutions from Prife International, combining natural ingredients with advanced technology to support your journey toward a healthier, happier life.</p>
            </div>

            <div className="cardbox">
                {
                  products.map((item, index) => (
                    <Card product_brief={item.product_brief} product_image={item.product_image} product_name={item.product_name} product_id={item.product_id} product_description={item.product_description} product_price={item.price} current_stock={item.current_stock} key={index} />
                  ))
                }
            </div>
        </div>
    </div>
  )
}
