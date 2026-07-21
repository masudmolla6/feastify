import { connect } from "@/app/lib/dbConnection";
import { ObjectId } from "mongodb";

const feedbackCollection = connect("feedbacks");

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  request: Request,
  { params }: Params
) {
  const { id } = await params;

  if (id.length !== 24) {
    return Response.json(
      {
        message: "Send Correct _id",
      },
      {
        status: 400,
      }
    );
  }

  const query = {
    _id: new ObjectId(id),
  };

  const result = await feedbackCollection.findOne(query);

  if (!result) {
    return Response.json(
      {
        message: "Feedback not found",
      },
      {
        status: 404,
      }
    );
  }

  return Response.json(result);
}

export async function PATCH(
  request: Request,
  { params }: Params
) {
  const { id } = await params;

  if (id.length !== 24) {
    return Response.json(
      {
        message: "Send Correct _id",
      },
      {
        status: 400,
      }
    );
  }



  const query = {
    _id: new ObjectId(id),
  };

  
  const body=await request.json();
  const {message}=body;

    if(!message || typeof message !== "string"){
        return Response.json({
            status:200,
            message:"Please Send a Message."
        });
    }

  const upadedDoc={
    $set:{
        message,
    }
  }

  const result = await feedbackCollection.updateOne(query, upadedDoc);

  if (!result) {
    return Response.json(
      {
        message: "Feedback not found",
      },
      {
        status: 404,
      }
    );
  }

  return Response.json(result);
}

export async function DELETE(
  request: Request,
  { params }: Params
) {
  const { id } = await params;

  if (id.length !== 24) {
    return Response.json(
      {
        message: "Send Correct _id",
      },
      {
        status: 400,
      }
    );
  }

  const query = {
    _id: new ObjectId(id),
  };

  const result = await feedbackCollection.deleteOne(query);

  if (!result) {
    return Response.json(
      {
        message: "Feedback not found",
      },
      {
        status: 404,
      }
    );
  }

  return Response.json(result);
}