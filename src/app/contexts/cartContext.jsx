"use client"

import { createContext, useContext, useState } from 'react'

const CartContext = createContext(null);

export default function CartProvider({ children }) {
    const [cart, setCart] = useState([]);
    const [sortBy, setSortBy] = useState("All");
    const [selectedCategory, setSelectedCategory] = useState("All")
    const categories = ["Wallpaper", "Marble Sheet", "Contact Paper", "Wall Panel", "Grass Turf"]

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product])
    }

    const removeFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, sortBy, setSortBy, categories, selectedCategory, setSelectedCategory }}>
        {children}
    </CartContext.Provider>
  )
}


export function useCart() {
    return useContext(CartContext);
}