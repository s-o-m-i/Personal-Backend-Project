import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";

const app = express();

(async () => {
  try {
    const connect = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_Name}`
    );
    app.on("error", (error) => {
      console.error(
        "ERROR :: The applicaton is not able to talk with database"
      );
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log(
        `The application is connected to database :: ${connect.connection.name} and running on port :: ${process.env.PORT}`
      );
    });
  } catch (error) {
    console.log("Error connection to database", error);
    throw error;
  }
})();
