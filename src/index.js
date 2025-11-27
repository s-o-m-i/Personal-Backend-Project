import dotenv from "dotenv";
dotenv.config();

import { connectDB } from "./db/index.js";
import { app } from "./app.js";

//const app = express();

connectDB()
  .then(() => {
    app.on("error", (err) => {
      console.error("Error in app", err);
      throw err;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running on PORT ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection failed !!!", err);
  });

// (async () => {
//   try {
//     const connect = await mongoose.connect(
//       `${process.env.MONGODB_URI}/${DB_Name}`
//     );
//     app.on("error", (error) => {
//       console.error(
//         "ERROR :: The applicaton is not able to talk with database"
//       );
//       throw error;
//     });
//     app.listen(process.env.PORT, () => {
//       console.log(
//         `The application is connected to database :: ${connect.connection.name} and running on port :: ${process.env.PORT}`
//       );
//     });
//   } catch (error) {
//     console.log("Error connection to database", error);
//     throw error;
//   }
// })();
