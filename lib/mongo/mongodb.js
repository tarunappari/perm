// lib/mongodb.ts (or wherever)
import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  throw new Error("❌ MONGODB_URI is not defined");
}

let cached = (global).mongoose || { conn: null, promise: null };

export async function connectToDatabase() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    console.log("🔌 Connecting to MongoDB...");
    console.log("MONGODB_URI starts with:", MONGODB_URI.slice(0, 25)); // don't log full URI!

    cached.promise = mongoose.connect(MONGODB_URI).then((mongoose) => {
      console.log("✅ MongoDB connected");
      return mongoose;
    });
  }

  cached.conn = await cached.promise;
  (global).mongoose = cached;
  return cached.conn;
}
