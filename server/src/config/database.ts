import mongoose from "mongoose";

import { env } from "./env";

import { logger } from "./logger";

const MAX_RETRIES = 5;

export const connectDatabase =
async (
  retry = 0
): Promise<void> => {

  try {

    await mongoose.connect(
      env.MONGO_URI
    );

    logger.info(
      "MongoDB Connected"
    );

  }
  catch(error){

    logger.error(error);

    if(
      retry <
      MAX_RETRIES
    ){

      logger.info(
        `Retrying database connection...`
      );

      setTimeout(() => {

        connectDatabase(
          retry + 1
        );

      },5000);

    }
    else{

      logger.error(
        "Database Connection Failed"
      );

      process.exit(1);

    }
  }
};