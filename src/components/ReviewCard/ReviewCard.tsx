"use client";

import Image from "next/image";
import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { Review } from "@/types/reviews";

interface ReviewCardProps {
  review: Review;
}

const ReviewCard = ({ review }: ReviewCardProps) => {
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(review.likes.length);

  const handleLike = () => {
    if (liked) {
      setLikeCount((prev) => prev - 1);
    } else {
      setLikeCount((prev) => prev + 1);
    }

    setLiked(!liked);
  };

  return (
    <div className="rounded-2xl border bg-base-100 p-6 shadow transition hover:shadow-lg">

      {/* User */}

      <div className="flex items-center gap-4">

        <div className="avatar">
          <div className="w-14 rounded-full">
            <Image
              src={review.photo}
              alt={review.user}
              width={56}
              height={56}
            />
          </div>
        </div>

        <div className="flex-1">
          <h3 className="font-bold">{review.user}</h3>

          <p className="text-sm opacity-60">
            {new Date(review.date).toLocaleDateString()}
          </p>
        </div>

      </div>

      {/* Rating */}

      <div className="mt-5 flex gap-1">

        {[...Array(review.rating)].map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}

      </div>

      {/* Review */}

      <p className="mt-5 leading-8 text-base-content/80">
        {review.review}
      </p>

      {/* Like */}

      <div className="mt-6 flex items-center justify-between border-t pt-5">

        <button
          onClick={handleLike}
          className={`btn btn-sm ${
            liked ? "btn-error" : "btn-outline"
          }`}
        >
          <Heart
            size={18}
            className={liked ? "fill-white" : ""}
          />
          Like
        </button>

        <span className="text-sm opacity-70">
          ❤️ {likeCount} Likes
        </span>

      </div>

    </div>
  );
};

export default ReviewCard;