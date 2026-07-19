import ReviewCardSkeleton from '@/components/ReviewCardSkeleton/ReviewCardSkeleton';
import React from 'react';

const ReviewLoading = () => {
    return (
    <section className="py-16">
      {/* Heading Skeleton */}
      <div className="text-center py-12">
        <div className="skeleton mx-auto h-4 w-40" />

        <div className="mt-5">
          <div className="skeleton mx-auto h-12 w-80" />
        </div>

        <div className="mt-5 space-y-2">
          <div className="skeleton mx-auto h-4 w-[500px]" />
          <div className="skeleton mx-auto h-4 w-[350px]" />
        </div>

        <div className="mt-6 flex justify-center gap-3">
          <div className="skeleton h-[2px] w-16" />
          <div className="skeleton h-8 w-40 rounded-full" />
          <div className="skeleton h-[2px] w-16" />
        </div>
      </div>

      {/* Cards */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {
                [...Array(12)].map((_, index) => <ReviewCardSkeleton key={index}/>)
            }
      </div>
    </section>
    );
};

export default ReviewLoading;