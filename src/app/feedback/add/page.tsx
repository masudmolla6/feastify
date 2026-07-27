import { connect } from '@/app/lib/dbConnection';
import FeedbackForm from '@/components/forms/FeedbackForms';
import { NewFeedback } from '@/types/feedback';
import { revalidatePath } from 'next/cache';

const AddFeedback = () => {
    const postFeedback=async(data:NewFeedback)=>{
        "use server";

        const result=await connect("feedbacks").insertOne(data);

        revalidatePath("/feedback");

        return {
            success: true,
            insertedId: result.insertedId.toString(),
        };
    }
    return (
        <div>
            <FeedbackForm postFeedback={postFeedback} />
        </div>
    );
};

export default AddFeedback;