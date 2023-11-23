require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const urlController = require("./controllers/url");

const app = express();

app.use(bodyParser.json());
app.use("/api/shorturl", urlController);

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC
const cors = require("cors");
app.use(cors({ optionsSuccessStatus: 200 })); // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static("../public"));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  // '/opt/render/project/src/src../views/index.html'
  res.sendFile(__dirname.replace("/src", "") + "/views/index.html");
});

// your first API endpoint...
app.get("/hello", function (req, res) {
  res.json({ greeting: "hello API" });
});

// app.get("/api/:timestamp", function (req, res) {
//   const timestampFromRequest = req.params.timestamp;

//   const date = Number(timestampFromRequest)
//     ? new Date(Number(timestampFromRequest))
//     : new Date(timestampFromRequest);

//   if (!date.toJSON()) {
//     return res.json({ error: "Invalid Date" });
//   }

//   const result = {
//     unix: date.getTime(),
//     utc: date.toUTCString(),
//   };
//   return res.json(result);
// });

// app.get("/api", function (req, res) {
//   const currentDate = new Date();

//   return res.json({
//     unix: currentDate.getTime(),
//     utc: currentDate.toUTCString(),
//   });
// });

// app.post("/api");

// listen for requests :)
const listener = app.listen(
  {
    host: "0.0.0.0",
    port: process.env.PORT,
  },
  function () {
    console.log("Your app is listening on port " + listener.address().port);
  }
);
