"use client";

import { FeedbackFormData } from "@/types/feedback";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

const FeedbackForm = () => {
  const router=useRouter();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FeedbackFormData>();

  const onSubmit = async (data: FeedbackFormData) => {
    const payload = {
      ...data,
      date: new Date().toISOString(),
    };

    try {
      const res = await fetch(`${process.env.NEXT_PUBLIC_server}/api/feedback`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Failed to add feedback.");
      }

      alert("Feedback Added Successfully.");
        const result = await res.json();

        console.log(result);
        router.push("/feedback");

      reset();
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto rounded-2xl shadow-lg border p-8">
      <h2 className="text-3xl font-bold text-center mb-2">
        Add New Feedback
      </h2>

      <p className="text-center text-gray-500 mb-8">
        Share your customer feedback with us.
      </p>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-6"
      >
        {/* Name */}

        <div>
          <label className="block font-medium mb-2">
            Name
          </label>

          <input
            type="text"
            placeholder="Enter your name"
            {...register("name", {
              required: "Name is required",
            })}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
          />

          {errors.name && (
            <p className="text-red-500 text-sm mt-2">
              {errors.name.message}
            </p>
          )}
        </div>

        {/* Role */}

        <div>
          <label className="block font-medium mb-2">
            Role
          </label>

          <input
            type="text"
            placeholder="Food Blogger"
            {...register("role", {
              required: "Role is required",
            })}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
          />

          {errors.role && (
            <p className="text-red-500 text-sm mt-2">
              {errors.role.message}
            </p>
          )}
        </div>

        {/* Image */}

        <div>
          <label className="block font-medium mb-2">
            Image URL
          </label>

          <input
            type="url"
            placeholder="https://..."
            {...register("image", {
              required: "Image URL is required",
            })}
            className="w-full rounded-lg border px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
          />

          {errors.image && (
            <p className="text-red-500 text-sm mt-2">
              {errors.image.message}
            </p>
          )}
        </div>

        {/* Rating */}

        <div>
          <label className="block font-medium mb-2">
            Rating
          </label>

          <select
            {...register("rating", {
              required: "Rating is required",
              valueAsNumber: true,
            })}
            className="w-full rounded-lg border bg-gray-800 px-4 py-3 outline-none focus:ring-2 focus:ring-orange-500"
          >
            <option value="">Select Rating</option>
            <option value={1}>1 Star</option>
            <option value={2}>2 Stars</option>
            <option value={3}>3 Stars</option>
            <option value={4}>4 Stars</option>
            <option value={5}>5 Stars</option>
          </select>

          {errors.rating && (
            <p className="text-red-500 text-sm mt-2">
              {errors.rating.message}
            </p>
          )}
        </div>

        {/* Message */}

        <div>
          <label className="block font-medium mb-2">
            Message
          </label>

          <textarea
            rows={5}
            placeholder="Write your feedback..."
            {...register("message", {
              required: "Message is required",
            })}
            className="w-full rounded-lg border px-4 py-3 outline-none resize-none focus:ring-2 focus:ring-orange-500"
          />

          {errors.message && (
            <p className="text-red-500 text-sm mt-2">
              {errors.message.message}
            </p>
          )}
        </div>

        {/* Submit */}

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full rounded-lg bg-orange-500 hover:bg-orange-600 text-white py-3 font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Adding Feedback..." : "Add Feedback"}
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;