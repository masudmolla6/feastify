import FeedbackCard from "@/components/FeedbackCard/FeedbackCard";
import { connect } from "@/app/lib/dbConnection";
import { Feedback } from "@/types/feedback";
import { MessageSquareText } from "lucide-react";
import Link from "next/link";

const feedbackCollection = connect("feedbacks");

// ==========================================
// Get All Feedback
// ==========================================

const getFeedback = async (): Promise<Feedback[]> => {
  try {
    const feedbacks = await feedbackCollection.find().toArray();

    return feedbacks.map((feedback) => ({
      _id: feedback._id.toString(),
      name: feedback.name,
      role: feedback.role,
      image: feedback.image,
      rating: feedback.rating,
      message: feedback.message,
      date: feedback.date,
    }));
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch feedback");
  }
};

// ==========================================
// Feedback Page
// ==========================================

const FeedbackPage = async () => {
  const feedbacks = await getFeedback();

  return (
    <section className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* ================= Heading ================= */}

        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">
            <MessageSquareText size={18} />
            Customer Feedback
          </div>

          <h1 className="mt-5 text-4xl font-extrabold md:text-5xl">
            What Our
            <span className="text-orange-500"> Customers </span>
            Say
          </h1>

          <p className="mt-4 leading-7 text-gray-600">
            Every review helps us improve our service and deliver a better
            dining experience. Here's what our customers have shared about
            their experience.
          </p>

          <Link
            href="/feedback/add"
            className="mt-6 inline-flex items-center rounded-full bg-cyan-500 px-6 py-3 font-medium text-white transition hover:bg-cyan-600"
          >
            Add New Feedback
          </Link>
        </div>

        {/* ================= Feedback Cards ================= */}

        <div className="mt-14 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {feedbacks.map((feedback) => (
            <FeedbackCard
              key={feedback._id}
              feedback={feedback}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackPage;