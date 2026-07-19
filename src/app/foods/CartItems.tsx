"use client"

import { CartContext } from "@/context/CartProvider";
import { useContext } from "react";

const CartItems = () => {

    const context=useContext(CartContext);

    if (!context) {
        throw new Error("CartItems must be used inside CartProvider");
    }

    const {cart}=context;

    return (
        <div>
            <h2>{cart.length} Cart Items Added.</h2>
        </div>
    );
};

export default CartItems;