import mongoose from "mongoose";

const messageSchema = mongoose.Schema(
  {
    senderId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      req: true,
    },
    receiverId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
      req: true,
    },
    text: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamp: true },
);

const message = mongoose.Model("Message", messageSchema);

export default message;
