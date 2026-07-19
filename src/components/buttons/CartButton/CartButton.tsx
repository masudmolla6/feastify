"use client";

import { CartContext } from "@/context/CartProvider";
import { Food } from "@/types/food";
import { ShoppingCart } from "lucide-react";
import { useContext, useState } from "react";

type CartButtonProps = {
  food: Food;
};

const CartButton = ({food}:CartButtonProps) => {
  const [inCart, setInCart] = useState(false);

    const context=useContext(CartContext);

    if (!context) {
      throw new Error("CartButton must be used inside CartProvider");
    }

    const { addToCart } = context;


    const handleAddToCart=()=>{
        addToCart(food);
        setInCart(true)
    }

  return (
    <button onClick={handleAddToCart} 
        disabled={inCart}
      className="btn btn-primary disabled:bg-gray-500">
      <ShoppingCart size={18} />

      {inCart ? "Added" : "Add to Cart"}

    </button>
  );
};

export default CartButton;