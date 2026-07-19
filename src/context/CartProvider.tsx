"use client"
import { Food } from '@/types/food';
import React, { createContext, ReactNode, useState } from 'react';

type ChildrenProps={
    children: ReactNode;
};

type CartContextType={
    cart:Food[];
    addToCart:(item:Food)=> void;
};

export const CartContext=createContext<CartContextType | null>(null);

const CartProvider = ({children}:ChildrenProps) => {
    const [cart, setCart]=useState<Food[]>([]);
    const addToCart=(item:Food)=>{
        setCart((prev) => [item, ...prev]);
    }

    const cartInfo={
        addToCart,
        cart
    }
    return (
        <CartContext.Provider value={cartInfo}>
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;