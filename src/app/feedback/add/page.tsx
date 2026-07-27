import { connect } from '@/lib/dbConnection';
import FeedbackForm from '@/components/forms/FeedbackForms';
import { postFeedback } from '@/action/server/feedback';

const AddFeedback = () => {

    return (
        <div>
            <FeedbackForm postFeedback={postFeedback} />
        </div>
    );
};

export default AddFeedback;