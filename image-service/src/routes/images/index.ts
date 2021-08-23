import { json } from "body-parser";
import express, { Request, Response } from "express";
import ContainerModel from "../../models/container";

const router = express.Router();

router.use(json());
router.get("/all", async (req: Request, res: Response) => {
	const containers = await ContainerModel.find({});
	console.log(containers);
	res.json(containers);
});

export { router as indexImageRouter };
