const express = require("express");
const CronJob = require("cron").CronJob;
const app = express();

app.use(express.static("dist"));

var job = new CronJob(
  "* * * * * *",
  function() {
    console.log("You will see this message every second");
  },
  null,
  true,
  "America/Los_Angeles"
);
job.start();

app.get("/where", (req, res) => {
  res.send("where art though");
});

app.listen(3000, () => console.log("Listening on port 3000!"));
