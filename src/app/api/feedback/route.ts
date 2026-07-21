import { connect } from "@/app/lib/dbConnection";
import { revalidatePath } from "next/cache";


const feedbackCollection=connect("feedbacks");

export async function GET(request: Request) {

    const result=await feedbackCollection.find().toArray();
    return Response.json(result);
}

export async function POST(request: Request) {
    const body = await request.json();

    const { name, role, image, rating, message, date } = body;  
    

    if (
    !name ||
    !role ||
    !image ||
    !message ||
    typeof rating !== "number"
    ) {
    return Response.json(
        {
        message: "Please fill all fields.",
        },
        {
        status: 400,
        }
    );
    }

        const newFeedback = {
        name,
        role,
        image,
        rating,
        message,
        date,
        };

        const result=await feedbackCollection.insertOne(newFeedback);

        revalidatePath("/feedback")



    return Response.json(result);
}
