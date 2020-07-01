const http = require("http");
const express = require("express");
const app = express();
const bodyparser = require("body-parser");
const port = 4000;
app.use(bodyparser.json());
const Roomdetails = [];
const Customerdetails = [];
app.post("/Roomdetails", (req, res) => {
  Roomdetails.push(req.body);
  console.log("Roomdetails created");
  res.json({ message: "Roomdetails created" });
});
app.post("/Customerdetails", (req, res) => {
  Customerdetails.push(req.body);
  console.log("customerdetails created");
  res.json({ message: "customerdetails" });
});
app.get("/bookedRoom", (req, res) => {
  let room = Customerdetails.map((data) => {
    return {
      CustomerName: data.CustomerName,
      Date: data.Date,
      StartTime: data.StartTime,
      EndTime: data.EndTime,
      BookStatus: data.BookStatus,
      RoomId: data.RoomId,
    };
  });
  res.json(room);
});
app.get("/bookedCustomers", (req, res) => {
  let customer = Customerdetails.map((data) => {
    return {
      CustomerName: data.CustomerName,
      RoomId: data.RoomId,
    };
  });
  res.json(customer);
});
app.listen(process.env.PORT || port, () => {
  console.log(`the server is listening ${port}`);
});
