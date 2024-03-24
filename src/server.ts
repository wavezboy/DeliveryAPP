import mongoose from "mongoose";
import app from "./app";
import env from "./utils/validateEnv";

// mongoose
//   // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
//   .connect(process.env.MONGO_CONNECTION_STRING!)
//   .then(() => {
//     console.log("mongoose connected");

//   })
//   .catch(console.error);

app.listen(env.PORT, () => {
  console.log(`connected to ${env.PORT}`);
});
