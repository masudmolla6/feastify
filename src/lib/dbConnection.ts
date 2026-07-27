import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;

const client = new MongoClient(uri);

export const clientPromise = client.connect();

export const connect = (collection: string) => {
  const database = process.env.DB_NAME!;

  return client.db(database).collection(collection);
};
