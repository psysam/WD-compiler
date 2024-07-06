import mongoose from "mongoose";

export const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI!, {
      dbName: "wd-compiler",
    });
    console.log("Connected To Database!");
  } catch (error) {
    console.log("Error Connecting To Database!");
  }
};
