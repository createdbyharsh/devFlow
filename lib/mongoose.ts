import logger from "@/lib/logger";
import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined");
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

declare global {
  var mongoose: MongooseCache | undefined;
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

const dbConnect = async (): Promise<Mongoose> => {
  if (cached.conn) {
    logger.info("using existing mongoose connection")
    return cached.conn;
  }

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, { dbName: "devflow" })
      .then((m) => {
        logger.info("Connected to MongoDB");
        return m;
      })
      .catch((err) => {
        logger.error("Error connecting to MongoDB:", err);
        throw err;
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
};

export default dbConnect;
