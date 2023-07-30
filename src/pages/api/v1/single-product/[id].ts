import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ObjectId, ServerApiVersion } from "mongodb";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const uri = `mongodb+srv://${process.env.MONGODB_USER}:${process.env.MONGODB_PASS}@test1.trceg.mongodb.net/?retryWrites=true&w=majority`;

    const client = new MongoClient(uri, {
      serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
      },
    });
    await client.connect();
    const database = client.db("gtech");
    const productCollection = database.collection("products");

    // get single product dat by id
    if (req.method === "GET") {
      const { id } = req.query;
      const query = { _id: new ObjectId(id as string) };
      const product = await productCollection.findOne(query);

      res.send({
        message: "Product fetched successfully",
        status: 200,
        data: product,
      });
    }
  } catch (e: any) {
    res.send({
      message: e.message || "Server Error",
      status: 500,
    });
  }
}
