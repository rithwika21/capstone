import express, { Request, Response } from "express";
import { json } from "body-parser";
import { indexImageRouter } from "./routes/index";

const app = express();

app.use(json());
app.use(indexImageRouter);
app.get("/api/images/ping", (req: Request, res: Response) => {
	res.send("hi there");
});

export { app };
