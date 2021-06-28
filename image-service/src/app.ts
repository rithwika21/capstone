import express, { Request, Response } from "express";
import { json } from "body-parser";
import { indexImageRouter } from "./routes/images/index";
import { indexContainerRouter } from "./routes/containers";

const app = express();

app.use(json());
app.use("/api/images", indexImageRouter);
app.use("/api/container", indexContainerRouter);

export { app };
