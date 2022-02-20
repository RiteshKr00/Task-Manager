const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    dueDate: { type: Date, default: Date.now() + 3600000 * 24 },
    subtask: [
      {
        info: String,
        done: {
          type: Boolean,
          default: false,
        },
      },
    ],
    completed: {
      type: Boolean,
      default: false,
    },
    list: {
      type: String,
      default: "Inprogress",
      enums: ["Inprogress", "completed", "archived"],
    },
  },
  { timestamps: true }
);
const Task = mongoose.model("Task", taskSchema);
module.exports = Task;
