export interface Review {
  id: number;
  user: string;
  email: string;
  photo: string;
  rating: number;
  review: string;
  likes: string[];
  date: string;
}

export interface ReviewsResponse {
  status: number;
  reviews: Review[];
}