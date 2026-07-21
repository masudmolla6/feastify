import { connect } from "@/app/lib/dbConnection";


const feedbackCollection=connect("feedbacks");

export async function GET(request: Request) {

    const result=await feedbackCollection.find().toArray();
    return Response.json(result);
}

export async function POST(request: Request) {
    const body=await request.json();
    console.log(body);
    
    const {message}=body;

    if(!message || typeof message !== "string"){
        return Response.json({
            status:200,
            message:"Please Send a Message."
        });
    }

    const newFeedback={
            name: "Sakib Al Hasan",
            role: "Player",
            image: "https://randomuser.me/api/portraits/women/4.jpg",
            rating: 5,
            message,
            date:new Date().toISOString()
        }

        const result=await feedbackCollection.insertOne(newFeedback);



    return Response.json(result);
}
