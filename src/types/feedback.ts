export interface NewFeedback {
  name: string;
  role: string;
  image: string;
  rating: number;
  message: string;
  date: string;
}

export interface Feedback extends NewFeedback {
  _id: string;
}

export type FeedbackFormData = Omit<NewFeedback, "date">;