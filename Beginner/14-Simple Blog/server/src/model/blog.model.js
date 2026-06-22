import mongoose from "mongoose";

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    slug: {
      type: String,
      required: true,
      unique: true,
    },

    content: {
      type: String,
      required: true,
    },

    author: {
      type: String,
      default: "Admin",
    },

    image: {
      type: String,
    },

    tags: [String],
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("simple blog", blogSchema);