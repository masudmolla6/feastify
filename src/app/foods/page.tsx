import FoodCard from "@/components/FoodCard/FoodCard";
import { Food, FoodsResponse } from "@/types/food";
import { resolve } from "path";

const getFoods=async():Promise<Food[]>=>{
    const res=await fetch("https://taxi-kitchen-api.vercel.app/api/v1/foods/random");
    const data:FoodsResponse=await res.json();

    await new Promise((resolve)=> setTimeout(resolve, 3000));
    
    return data.foods || [];
}
const Foods = async() => {
    const foods=await getFoods();
    console.log(foods);
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {foods.map((food) => (
            <FoodCard key={food.id} food={food} />
        ))}
        </div>
    );
};

export default Foods;