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
  // app.post("/create",async(req,res)=>{try {

  // } catch (error) {

  // }})
};
