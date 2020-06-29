const express = require("express");
const fs = require("fs");
const app = express();
const port = 5000;
app.get("/", (req, res) => {
  fs.writeFile("date-time.txt", createdDate("./date-time.txt"), (err) => {
    if (err) throw err;
    console.log("write successfully ");
  });
  function createdDate(file) {
    const { birthtime } = fs.statSync(file);
    return birthtime;
  }
  res.send("This is my file creation details");
});
app.get("/date", (req, res) => {
  fs.readdir("C:\Users\vijay\Desktop\node js", (err, files) => {
    if (err) throw err;
    res.send(files);
  });
});
app.listen(port, () => {
  console.log(`server is listening ${port}`);
});
