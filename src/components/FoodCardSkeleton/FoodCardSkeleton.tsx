const FoodCardSkeleton = () => {
  return (
    <div className="overflow-hidden rounded-2xl border border-base-300 bg-base-100 shadow">
      <div className="skeleton h-60 w-full" />

      <div className="space-y-4 p-5">
        <div className="space-y-3">
          <div className="skeleton h-6 w-3/4" />
          <div className="skeleton h-7 w-24" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="skeleton h-12 rounded-xl" />
          <div className="skeleton h-12 rounded-xl" />
        </div>
      </div>
    </div>
  );
};

export default FoodCardSkeleton;