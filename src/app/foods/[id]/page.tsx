import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ShoppingCart,
  MapPin,
  PlayCircle,
  UtensilsCrossed,
} from "lucide-react";
import { Food, SingleFoodResponse } from "@/types/food";
import { Metadata, ResolvingMetadata } from "next";
import { title } from "process";
import { redirect } from "next/navigation";

export function generateStaticParams() {
  return [{ id: '52972' }, { id: '52973' }, { id: '52975' }]
}

interface FoodDetailsPageProps {
  params: Promise<{
    id: string;
  }>;
}

type Props = {
  params: Promise<{
    id: string;
  }>;
  searchParams: Promise<{
    [key: string]: string | string[] | undefined;
  }>;
};


export async function generateMetadata(
  { params }: Props
): Promise<Metadata>{

  const {id} = await params;
 
  // fetch post information
    const res = await fetch(
      `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
    );
 
    const {details = {}}=await res.json();

    return {
      title:details.title,
    }

}

const getSingleFood = async (
  id: string): Promise<Food | null> => {
  const res = await fetch(
    `https://taxi-kitchen-api.vercel.app/api/v1/foods/${id}`,
  );

  if (!res.ok) return null;

  const data:SingleFoodResponse = await res.json();

  return data.details;
};

const FoodDetailsPage = async ({
  params,
}: FoodDetailsPageProps) => {
  const { id } = await params;

  const food = await getSingleFood(id);

  if (!food?.title) {
    redirect("/foods");
    // return (
    //   <div className="flex min-h-[70vh] items-center justify-center">
    //     <div className="text-center">
    //       <h2 className="text-4xl font-bold">
    //         Food Not Found 😢
    //       </h2>

    //       <Link href="/foods" className="btn btn-primary mt-8">
    //         Back to Menu
    //       </Link>
    //     </div>
    //   </div>
    // );
  }

  return (
    <section className="bg-base-200 py-16">
      <div className="mx-auto max-w-7xl px-5">

        <Link href="/foods" className="btn btn-outline mb-10">
          <ArrowLeft size={18} />
          Back
        </Link>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Image */}

          <div className="overflow-hidden rounded-3xl bg-base-100 shadow-xl">
            <div className="relative h-[500px]">
              <Image
                src={food.foodImg}
                alt={food.title}
                fill
                priority
                className="object-cover transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Details */}

          <div className="flex flex-col justify-center">

            <div className="badge badge-primary badge-lg w-fit">
              {food.category}
            </div>

            <h1 className="mt-5 text-5xl font-black">
              {food.title}
            </h1>

            <h2 className="mt-5 text-4xl font-bold text-primary">
              ${food.price}
            </h2>

            <p className="mt-8 leading-8 text-base-content/70">
              Enjoy freshly prepared food made with premium ingredients.
              Every dish is crafted with care to deliver authentic taste
              and unforgettable flavor.
            </p>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              <div className="rounded-xl border bg-base-100 p-5">
                <div className="flex items-center gap-3">

                  <UtensilsCrossed className="text-primary" />

                  <div>
                    <p className="text-sm opacity-70">
                      Category
                    </p>

                    <h3 className="font-semibold">
                      {food.category}
                    </h3>
                  </div>

                </div>
              </div>

              <div className="rounded-xl border bg-base-100 p-5">
                <div className="flex items-center gap-3">

                  <MapPin className="text-primary" />

                  <div>
                    <p className="text-sm opacity-70">
                      Cuisine
                    </p>

                    <h3 className="font-semibold">
                      {food.area}
                    </h3>
                  </div>

                </div>
              </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <button className="btn btn-primary btn-lg">
                <ShoppingCart size={20} />
                Add to Cart
              </button>

              <a
                href={food.video}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-error btn-lg"
              >
                <PlayCircle size={20} />
                Watch Recipe
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodDetailsPage;