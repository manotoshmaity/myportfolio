import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/myfolio"); // 👈 use 127.0.0.1
    console.log("MongoDB connected successfully 🚀");
  } catch (error) {
    console.error("MongoDB connection failed ❌", error.message);
    process.exit(1);
  }
};

export default connectDB;
