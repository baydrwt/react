import { MongoClient } from "mongodb";

// /api/new-meetup
// POST /api/new-meetup

export default async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect("mongodb+srv://baydrwt:DpBcFd4nB5njVoNK@cluster0.m1c9y.mongodb.net/meetups?retryWrites=true&w=majority&appName=Cluster0");
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    client.close();

    res.status(201).json({ message: "Meetup Inserted!" });
  }
}
