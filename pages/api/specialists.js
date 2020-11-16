import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();

  const specialists = await db
    .collection("specialists")
    .find({})
    .sort({ last_name: 1 })
    .limit(20)
    .toArray();

  res.json(specialists);
};