import React from 'react';
import ReviewsPage from './ReviewsPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  // title: "All Reviews",
  title: {
    absolute:"Satisfied User",
  },
  description: "Best Food In Bangladesh",
};

const AllReviews = () => {
  return (
    <div>
      <ReviewsPage></ReviewsPage>
    </div>
  );
};

export default AllReviews;