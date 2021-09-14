import axios, { AxiosResponse } from "axios";
import { json } from "body-parser";
import express, { Request, response, Response } from "express";
import ContainerModel from "../../models/container";

const router = express.Router();
router.use(json());

router.post("/save", async (req: Request, res: Response) => {
	const { containerId } = req.body;
	const rn = Math.floor(Math.random() * 10000 + 1);
	await axios
		.post("http://3.89.213.136:3000/api/container/commit", {
			containerId,
			tag: `image-${rn}`,
		})
		.then(async ({ data }: AxiosResponse) => {
			console.log(data);
			// await ContainerModel.findOneAndUpdate(
			// 	{ containerName: containerName },
			// 	{ state: "Stopped", imageName: data.imageName }
			// ).then(() => {
			// 	res.json({
			// 		message: "container commited successfully",
			// 	}).end;
			// })
			res.json(...data).end();
		})
		.catch((err: Error) => {
			res.status(500).json({ err: err }).end();
		});
});

export { router as saveContainerRouter };
