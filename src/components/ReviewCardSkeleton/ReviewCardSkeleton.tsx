const ReviewCardSkeleton = () => {
  return (
    <div className="rounded-2xl border bg-base-100 p-6 shadow">

      <div className="flex items-center gap-4">

        <div className="skeleton h-14 w-14 rounded-full" />

        <div className="flex-1 space-y-2">
          <div className="skeleton h-5 w-36" />
          <div className="skeleton h-4 w-24" />
        </div>

      </div>

      <div className="mt-5 flex gap-2">
        {[...Array(5)].map((_, i) => (
          <div key={i} className="skeleton h-5 w-5 rounded-full" />
        ))}
      </div>

      <div className="mt-5 space-y-3">
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-full" />
        <div className="skeleton h-4 w-3/4" />
      </div>

      <div className="mt-6 flex items-center justify-between border-t pt-5">
        <div className="skeleton h-10 w-28 rounded-xl" />
        <div className="skeleton h-5 w-20" />
      </div>

    </div>
  );
};

export default ReviewCardSkeleton;