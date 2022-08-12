const mongoose = require("mongoose");

const goalSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "User",
    },
    content: {
      type: String,
      required: [true, "Text required"],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Goal", goalSchema);
