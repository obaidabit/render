const express = require("express");
const nodeCron = require("node-cron");

const app = express();
process.env.TZ = "Etc/GMT-3";
app.get("/", (req, res) => {
  res.json({
    msg: "Hello World",
    tasks: nodeCron.getTasks(),
  });
});

console.log("Starting node cron");
nodeCron.schedule("* * * * *", (d) => {
  console.log("Running a task every minute");
  console.log(new Date());
});

app.listen(3000, () => {
  console.log("Server is running...");
});
