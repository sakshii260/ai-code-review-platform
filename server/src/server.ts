import express from "express";

import testRoutes
from "./routes/test.routes";

import { connectDatabase }
from "./config/database";

const app = express();

app.use(express.json());

app.use(
  "/api/test",
  testRoutes
);

app.get("/", (_, res) => {
  res.send("Backend Running");
});

const startServer =
async () => {

  await connectDatabase();

  app.listen(
    5000,
    () => {

      console.log(
        "Server Running"
      );

    }
  );
};

startServer();