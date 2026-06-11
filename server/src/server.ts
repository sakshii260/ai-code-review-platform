import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.send("Backend Running");
});

app.listen(5000, () => {
  console.log("Server Running");
});