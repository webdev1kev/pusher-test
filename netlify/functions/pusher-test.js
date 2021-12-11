const Pusher = require("pusher");

const pusher = new Pusher({
  app_id: "1315569",
  key: "8cd5e03e4d8b0f26c173",
  secret: "10f9da85aa3862b046e8",
  cluster: "us2",
});

pusher.trigger("this-channel", "some-event", { message: "hello" });
