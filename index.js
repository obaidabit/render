const express = require("express");
const nodeCron = require("node-cron");

const app = express();

app.get("/", (req, res) => {
  console.log("Starting node cron");
  const task = nodeCron.schedule("* * * * * *", (d) => {
    console.log("Running a task every minute");
    console.log(new Date());
  });
  res.json({
    msg: "Hello World",
    tasks: nodeCron.getTasks(),
  });
});

app.listen(3000, () => {
  console.log("Server is running...");
});
