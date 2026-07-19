"use client";

import ReviewCard from "@/components/ReviewCard/ReviewCard";
import { Review, ReviewsResponse } from "@/types/reviews";

import React, { useEffect, useState } from "react";
import ReviewLoading from "./ReviewLoading";

const Reviews = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading]=useState(true);

  useEffect(() => {
    const getReviews = async () => {
      const res = await fetch(
        "https://taxi-kitchen-api.vercel.app/api/v1/reviews"
      );

      const data: ReviewsResponse = await res.json();

      setReviews(data.reviews);
      setLoading(false);

    };

    getReviews();
  }, []);

//   console.log(reviews);

  if(loading) return <ReviewLoading/>

  return (
    <section className="py-16">
        <div className="mb-14 text-center">

        <span className="badge badge-primary badge-outline px-5 py-4">
            Testimonials
        </span>

        <h2 className="mt-5 text-4xl font-black md:text-5xl">
            What Our
            <span className="text-primary"> Customers </span>
            Say
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-base-content/70 leading-8">
            Thousands of happy food lovers have shared their dining experiences.
            Discover why our customers keep coming back for more delicious meals.
        </p>

        <div className="mt-8 flex justify-center">
            <div className="h-1 w-28 rounded-full bg-primary"></div>
        </div>

        </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {reviews.map((review) => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;