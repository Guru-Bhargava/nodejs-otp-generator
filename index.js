const express = require("express");
const app = express();
app.listen(5000, () => {
  console.log("server running at http://localhost:5000");
});
app.get("/", (req, res) => {
  res.send("Otp generator");
});
