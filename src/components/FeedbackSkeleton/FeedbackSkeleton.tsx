const FeedbackSkeleton = () => {
  return (
    <div className="rounded-2xl border border-gray-200 p-6 shadow-sm animate-pulse">
      {/* Avatar */}
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 rounded-full bg-gray-200"></div>

        <div className="flex-1">
          <div className="h-5 w-36 rounded bg-gray-200"></div>

          <div className="mt-3 h-4 w-24 rounded bg-gray-200"></div>

          <div className="mt-3 h-3 w-28 rounded bg-gray-200"></div>
        </div>
      </div>

      {/* Rating */}
      <div className="mt-6 flex gap-2">
        {Array.from({ length: 5 }).map((_, index) => (
          <div
            key={index}
            className="h-5 w-5 rounded bg-gray-200"
          ></div>
        ))}
      </div>

      {/* Message */}
      <div className="mt-6 space-y-3">
        <div className="h-4 rounded bg-gray-200"></div>
        <div className="h-4 rounded bg-gray-200"></div>
        <div className="h-4 w-3/4 rounded bg-gray-200"></div>
      </div>

      {/* Buttons */}
      <div className="mt-8 grid grid-cols-2 gap-3">
        <div className="h-11 rounded-lg bg-gray-200"></div>
        <div className="h-11 rounded-lg bg-gray-200"></div>
      </div>
    </div>
  );
};

export default FeedbackSkeleton;