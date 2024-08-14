const express = require("express");

const app = express();

app.get("/users", (req, res) => {
  console.log(req.headers["user-agent"]);
  res.send("Helllo. Here is a list of all users-- ALBERT");
});

// other routes e.g. /about , /cars /signin /logout

//start the app --- allow to access the computers network interface
app.listen(4000);
