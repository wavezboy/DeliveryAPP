import "dotenv/config";
import express, { NextFunction, Request, Response } from "express";
import CreateHttpError, { isHttpError } from "http-errors";
import cors from "cors";
import router from "./routes/conversionRoute";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (req, res) => {
  res.json("There is no route on this endpoint");
});
app.use("/convert", router);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((error: unknown, req: Request, res: Response, next: NextFunction) => {
  console.log(error);
  let errorMesage = "an unknown error has occured";
  let statusCode = 500;
  if (isHttpError(error)) {
    statusCode = error.status;
    errorMesage = error.message;

    res.status(statusCode).json(errorMesage);
  }
});

app.use((req, res, next) => {
  res.status(404).json("endpoint not found");
  next(CreateHttpError(404, "endpoint not found"));
});
export default app;
