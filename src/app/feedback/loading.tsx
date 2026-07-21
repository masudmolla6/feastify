import FeedbackSkeleton from "@/components/FeedbackSkeleton/FeedbackSkeleton";

const Loading = () => {
  return (
    <section className="min-h-screen py-16">
      <div className="container mx-auto px-4">
        {/* Heading Skeleton */}

        <div className="flex flex-col items-center animate-pulse">
          <div className="h-9 w-40 rounded-full bg-gray-600"></div>

          <div className="mt-6 h-12 w-80 rounded bg-gray-600"></div>

          <div className="mt-4 h-5 w-[550px] max-w-full rounded bg-gray-600"></div>

          <div className="mt-2 h-5 w-[450px] max-w-full rounded bg-gray-600"></div>

          <div className="mt-8 h-12 w-40 rounded-full bg-gray-600"></div>
        </div>

        {/* Card Skeleton */}

        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.from({ length: 6 }).map((_, index) => (
            <FeedbackSkeleton key={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Loading;