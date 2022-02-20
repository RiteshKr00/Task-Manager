const CronJob = require("cron").CronJob;
module.exports = new CronJob(
  "* * * * * *"
  // function () {
  //   console.log("You will see this message every second");
  // },
  // null,
  // true
);
