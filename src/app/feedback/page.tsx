import FeedbackCard from "@/components/FeedbackCard/FeedbackCard";
import { Feedback } from "@/types/feedback";
import { MessageSquareText } from "lucide-react";
import Link from "next/link";

const getFeedback = async (): Promise<Feedback[]> => {
  const res = await fetch("http://localhost:3000/api/feedback", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to fetch feedback");
  }

  return res.json();
};

const FeedbackPage = async () => {
  const feedbacks = await getFeedback();

  return (
    <section className=" min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
            <MessageSquareText size={18} />
            Customer Feedback
          </div>

          <h1 className="mt-5 text-4xl md:text-5xl font-extrabold">
            What Our
            <span className="text-orange-500"> Customers </span>
            Say
          </h1>

          <p className="mt-4 text-gray-600 leading-7">
            Every review helps us improve our service and deliver a better
            dining experience. Here's what our customers have shared about
            their experience.
          </p>

          <div className="mt-6 inline-flex items-center rounded-full border bg-cyan-500 px-5 py-2 shadow-sm">
            <Link href={"/feedback/add"}>
                <span className="ml-2 text-gray-100">
                    Add New Feedback
                </span>
            </Link>
          </div>
        </div>

        {/* Cards */}

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {feedbacks.map((fb) => (
            <FeedbackCard
              key={fb._id}
              feedback={fb}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeedbackPage;