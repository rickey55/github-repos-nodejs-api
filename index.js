const express = require('express');
const axios = require('axios');
const app = express();
const PORT = process.env.PORT || 8081;
var testAPIRouter = require("./api/routes/testAPI");

app.use("/testAPI", testAPIRouter);

app.get("/", function (req, res) {
  res.send("hello world");
});

app.listen(PORT, () => {
  console.log(`server started on port ${PORT}`);
});
