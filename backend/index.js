
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import connectDB from "./db/db.js";
import Contact from "./models/contact.js";

const app = express();

// ✅ allow frontend (5173) to call backend (5000)
app.use(cors({
  origin: "http://localhost:5173", // your React app’s URL
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"],
}));

app.use(express.json());

// Connect DB
connectDB();

// Contact route
app.post("/contact", async (req, res) => {
  try {
    const { name, email, message } = req.body;
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ success: true, msg: "Message saved ✅" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, msg: "Server error ❌" });
  }
});

app.listen(5000, () => console.log("Server running on port 5000 🚀"));
