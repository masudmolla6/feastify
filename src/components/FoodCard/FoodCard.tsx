import Image from "next/image";
import Link from "next/link";
import { ShoppingCart, Eye } from "lucide-react";
import { Food } from "@/types/food";

interface FoodCardProps {
  food: Food;
}

const FoodCard = ({ food }: FoodCardProps) => {
  return (
    <div className="group overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      {/* Image */}
      <figure className="relative h-60 overflow-hidden">
        <Image
          src={food.foodImg}
          alt={food.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-white">
          {food.category}
        </span>
      </figure>

      {/* Content */}
      <div className="space-y-4 p-5">
        <div>
          <h2 className="line-clamp-1 text-xl font-bold">{food.title}</h2>

          <p className="mt-2 text-2xl font-extrabold text-primary">
            ${food.price}
          </p>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-3">
          <button className="btn btn-primary">
            <ShoppingCart size={18} />
            Add Cart
          </button>

          <Link
            href={`/foods/${food.id}`}
            className="btn btn-outline"
          >
            <Eye size={18} />
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;