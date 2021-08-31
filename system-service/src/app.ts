import express, { Request, Response } from "express";
import { json } from "body-parser";
import { GetSystemsRouter } from "./routes/systems/get";
import { SaveSystemRouter } from "./routes/systems/save";

const app = express();

app.use(json());
app.use("/api/systems", GetSystemsRouter);
app.use("/api/systems", SaveSystemRouter);

export { app };
