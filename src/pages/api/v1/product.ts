import type { NextApiRequest, NextApiResponse } from "next";
import { MongoClient, ServerApiVersion } from "mongodb";

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

    if (req.method === "POST") {
      const product = req.body;
      const result = await productCollection.insertOne(product);
      res.status(200).json(result);
    }
    if (req.method === "GET") {
      const products = await productCollection.find({}).toArray();
      res.send({
        message: "Product fetched successfully",
        status: 200,
        data: products,
      });
    }
  } catch (e: any) {
    res.send({
      message: e.message || "Server Error",
      status: 500,
    });
  }
}
