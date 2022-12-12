import clientPromise from "../../lib/mongodb";
import type { NextApiRequest, NextApiResponse } from 'next'



export default async (req:NextApiRequest, res:NextApiResponse<any>) => {
   try {
       const client = await clientPromise;
       const db = client.db("monami");

       const movies = await db
           .collection("Products")
           .find({})
           .toArray();

       res.json(movies);
   } catch (e) {
       console.error(e);
   }
};