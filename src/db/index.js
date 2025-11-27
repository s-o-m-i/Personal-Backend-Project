import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

export async function connectDB() {
  try {
    const connect = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_Name}`
    );
    console.log(
      `The application is connected to database ${connect.connection.name}`
    );
  } catch (error) {
    console.error("ERROR :: Failed to connect with database", error);
    process.exit(1);
  }
}
