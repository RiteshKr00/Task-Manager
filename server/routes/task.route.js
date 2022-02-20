const Task = require("../models/task.model");

module.exports = function (app) {
  app.get("/ping", (req, res) => {
    res.send("connected");
  });
  app.post("/create", async (req, res) => {
    try {
      const { title, description } = req.body;
      console.log(title);
      const task = await new Task({ title, description }).save();
      res.status(200).send(task);
    } catch (error) {
      res.status(500).send(`Something Went Wrong: ${error}`);
    }
  });
  app.put("/createsubtask", async (req, res) => {
    try {
      const { taskid, info } = req.body;
      const newsubtask = { info: info, done: false };
      console.log(info);
      const subtask = await Task.findByIdAndUpdate(
        taskid,
        {
          $push: { subtask: newsubtask },
        },
        { new: true }
      );
      res.status(200).send(subtask);
    } catch (error) {
      res.status(500).send(`Something Went Wrong: ${error}`);
    }
  });
  app.put("/complete", async (req, res) => {
    try {
      const { taskid } = req.body;
      const subtask = await Task.findOneAndUpdate(
        { taskid },
        {
          // prettier-ignore
          $set: {
            "completed": true,
            "list": "Completed",
            "subtask.$[elem].done": true,
          },
        },
        {
          arrayFilters: [{ "elem.done": false }],
        }
      );
      res.status(200).send(subtask);
    } catch (error) {
      res.status(500).send(`Something Went Wrong: ${error}`);
    }
  });
  //change subtask status to done/undone
  app.put("/change", async (req, res) => {
    try {
      const { taskid, subtaskid, status } = req.body;
      const subtask = await Task.findOneAndUpdate(
        { taskid },
        {
          // prettier-ignore
          $set: {
          "subtask.$[elem].done": status,
        },
        },
        {
          arrayFilters: [{ "elem._id": subtaskid }],
        }
      );
      res.status(200).send(subtask);
    } catch (error) {
      res.status(500).send(`Something Went Wrong: ${error}`);
    }
  });
  app.get("/fetch", async (req, res) => {
    try {
      const { listtype } = req.body;
      console.log(listtype);
      const list = await Task.find({ list:listtype });
      res.status(200).send(list);
    } catch (error) {
      res.status(500).send(`Something Went Wrong: ${error}`);
    }
  });
  // app.post("/create",async(req,res)=>{try {

  // } catch (error) {
  // res.status(500).send(`Something Went Wrong: ${error}`);

  // }})
  // app.post("/create",async(req,res)=>{try {

  // } catch (error) {
  //      res.status(500).send(`Something Went Wrong: ${error}`);

  // }})
};
