import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  if (req.method === 'POST') {
    console.log(req.body)
    const result = await db
      .collection("specialists")
      .insertOne(req.body)
    res.json(result)
  } else {
    const specialists = await db
      .collection("specialists")
      .find({})
      .sort({ last_name: 1 })
      .limit(20)
      .toArray();

    res.json(specialists);
  }
};