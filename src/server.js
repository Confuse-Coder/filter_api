import express from "express";
import initAPIRoute from "./route/api";
require("dotenv").config();
const ipfilter = require("express-ipfilter").IpFilter;
const IpDeniedError = require("express-ipfilter").IpDeniedError;

let app = express();

const ips = ["::ffff:127.0.0.2", "::ffff:127.0.0.3/24"]; //import white list here!

app.use(ipfilter(ips, { mode: "allow" }));
app.use((err, req, res, _next) => {
  if (err instanceof IpDeniedError) {
    res.status(401).json({ message: "Error!" });
  } else {
    res.status(err.status || 500);
  }
});

initAPIRoute(app);

let port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log("Backend Nodejs is runing on the port : " + port);
});
