import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    console.log("Connecting...");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongo Connected");
  } catch (error) {
    console.error(" MongoDB Error:");
    console.error(error);
  }
};