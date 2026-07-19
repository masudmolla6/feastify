const FoodDetailsSkeleton = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-5">

        <div className="skeleton mb-10 h-12 w-36" />

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Image */}

          <div className="skeleton h-[500px] rounded-3xl" />

          {/* Content */}

          <div>

            <div className="skeleton h-8 w-28" />

            <div className="mt-6 skeleton h-14 w-4/5" />

            <div className="mt-6 skeleton h-10 w-32" />

            <div className="mt-8 space-y-3">

              <div className="skeleton h-5 w-full" />

              <div className="skeleton h-5 w-full" />

              <div className="skeleton h-5 w-3/4" />

            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">

              <div className="rounded-xl border p-5">
                <div className="space-y-3">
                  <div className="skeleton h-5 w-20" />
                  <div className="skeleton h-6 w-32" />
                </div>
              </div>

              <div className="rounded-xl border p-5">
                <div className="space-y-3">
                  <div className="skeleton h-5 w-20" />
                  <div className="skeleton h-6 w-32" />
                </div>
              </div>

            </div>

            <div className="mt-10 flex gap-4">
              <div className="skeleton h-14 w-44" />
              <div className="skeleton h-14 w-44" />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default FoodDetailsSkeleton;