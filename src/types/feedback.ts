export interface Feedback {
  _id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  message: string;
  date: string;
}

export type FeedbackFormData = Omit<Feedback, "_id" | "date">;