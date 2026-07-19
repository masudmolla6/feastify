import FoodCard from "@/components/FoodCard/FoodCard";
import { Food, FoodsResponse, SearchProps } from "@/types/food";
import CartItems from "./CartItems";
import InputSearch from "@/components/buttons/InputSearch/InputSearch";

const getFoods=async(search:string):Promise<Food[]>=>{
    const res=await fetch(`https://taxi-kitchen-api.vercel.app/api/v1/foods/random?search=${search}`);
    const data:FoodsResponse=await res.json();

    await new Promise((resolve)=> setTimeout(resolve, 3000));
    
    return data.foods || [];
}
const Foods = async ({ searchParams }: SearchProps) => {
    
    const {search=""}=await searchParams;
    console.log(search);
    
    const foods=await getFoods(search);
    // console.log(foods);
    return (
        <section className="py-2 px-5">
        <div className="text-center py-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Fresh & Delicious
            </p>

            <h2 className="mt-3 text-4xl font-extrabold md:text-5xl">
            <span className="bg-gradient-to-r from-orange-500 via-yellow-400 to-red-500 bg-clip-text text-transparent">
                Our Food Items {foods.length}
            </span>
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-base-content/70">
            Explore our chef-crafted dishes made with fresh ingredients, rich flavors,
            and a touch of passion in every bite.
            </p>

            <div className="mt-6 flex items-center justify-center gap-3">
            <span className="h-[2px] w-16 bg-gradient-to-r from-transparent to-primary" />
            <span className="rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm font-medium text-primary">
                🍽️ Signature Menu
            </span>
            <span className="h-[2px] w-16 bg-gradient-to-l from-transparent to-primary" />
            </div>
            <div className="py-5">
                <InputSearch></InputSearch>
            </div>
        </div>

        <div className="grid grid-cols-12 gap-6">
            <div className="col-span-9">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    {foods.map((food) => (
                    <FoodCard key={food.id} food={food} />
                    ))}
                </div>
            </div>
            <div className="col-span-3 border-2 px-4 rounded-2xl text-center">
                <div>
                    <h2 className="border-b-2">Cart Items</h2>
                    <CartItems></CartItems>
                </div>
            </div>
        </div>
        </section>
    );
};

export default Foods;