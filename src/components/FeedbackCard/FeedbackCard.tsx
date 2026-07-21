"use client";

import Image from "next/image";
import { Feedback } from "@/types/feedback";
import { Pencil, Trash2, Star } from "lucide-react";

interface FeedbackCardProps {
  feedback: Feedback;
  onUpdate?: (feedback: Feedback) => void;
  onDelete?: (id: string) => void;
}

const FeedbackCard = ({
  feedback,
  onUpdate,
  onDelete,
}: FeedbackCardProps) => {
  return (
    <div className="bg-gray-700 rounded-xl border border-gray-200 shadow-md hover:shadow-xl transition-all duration-300 p-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Image
          src={feedback.image}
          alt={feedback.name}
          width={60}
          height={60}
          className="rounded-full object-cover border"
        />

        <div className="flex-1">
          <h3 className="font-semibold text-lg">{feedback.name}</h3>

          <p className="text-sm text-gray-200">{feedback.role}</p>

          <p className="text-xs text-gray-200 mt-1">
            {new Date(feedback.date).toLocaleDateString("en-BD", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </p>
        </div>
      </div>

      {/* Rating */}

      <div className="flex gap-1 mt-4">
        {Array.from({ length: feedback.rating }).map((_, index) => (
          <Star
            key={index}
            size={18}
            className="fill-yellow-400 text-yellow-400"
          />
        ))}
      </div>

      {/* Message */}

      <p className="text-gray-200 leading-7 mt-4">
        {feedback.message}
      </p>

      {/* Buttons */}

      <div className="grid grid-cols-2 gap-3 mt-6">
        <button
          onClick={() => onUpdate?.(feedback)}
          className="flex items-center justify-center gap-2 rounded-lg bg-blue-600 py-2 text-white hover:bg-blue-700 transition"
        >
          <Pencil size={18} />
          Update
        </button>

        <button
          onClick={() => onDelete?.(feedback._id)}
          className="flex items-center justify-center gap-2 rounded-lg bg-red-600 py-2 text-white hover:bg-red-700 transition"
        >
          <Trash2 size={18} />
          Delete
        </button>
      </div>
    </div>
  );
};

export default FeedbackCard;