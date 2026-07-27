
import { connect } from '@/lib/dbConnection';
import { Feedback, NewFeedback } from '@/types/feedback';
import { revalidatePath } from 'next/cache';

export const postFeedback=async(data:NewFeedback)=>{
    "use server";
    const result=await connect("feedbacks").insertOne(data);
    revalidatePath("/feedback");
    return {
        success: true,
        insertedId: result.insertedId.toString(),
    };
}



// ==========================================
// Get All Feedback
// ==========================================
const feedbackCollection = connect("feedbacks");

export const getFeedback = async (): Promise<Feedback[]> => {
  try {
    const feedbacks = await feedbackCollection.find().toArray();

    return feedbacks.map((feedback) => ({
      _id: feedback._id.toString(),
      name: feedback.name,
      role: feedback.role,
      image: feedback.image,
      rating: feedback.rating,
      message: feedback.message,
      date: feedback.date,
    }));
  } catch (error) {
    console.error(error);
    throw new Error("Failed to fetch feedback");
  }
};
