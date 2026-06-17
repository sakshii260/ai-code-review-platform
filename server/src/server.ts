import express from "express";

import testRoutes
from "./routes/test.routes";

import { connectDatabase }
from "./config/database";

import authRoutes
from "./routes/auth.routes";

import repositoryRoutes
from "./routes/repository.routes";

import reviewRoutes
from "./routes/review.routes";

const app = express();

app.use(express.json());

app.use(
  "/api/test",
  testRoutes
);

app.use(
  "/api/auth",
  authRoutes
);

app.use(
  "/api/repositories",
  repositoryRoutes
);

app.use(
 "/api/reviews",
 reviewRoutes
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