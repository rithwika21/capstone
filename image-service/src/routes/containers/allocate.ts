import { json } from "body-parser";
import express, { Request, Response } from "express";
import axios, { AxiosResponse } from "axios";
import ContainerModel from "../../models/container";

const router = express.Router();

router.use(json());

router.post("/allocate", (req, res) => {
	const { baseImage, containerName, password, username } = req.body;
	axios
		.post("http://3.89.213.136:3000/api/container/create", {
			baseImage,
			containerName,
			password,
			username,
		})
		.then(async ({ data }: AxiosResponse) => {
			// const containerData = await ContainerModel.create({
			// 	imageName: "not yet saved",
			// 	containerName: data.containerName,
			// 	state: "Running",
			// });
			const resData = { ...data };
			res.json(resData).end();
		})
		.catch((err) => {
			console.log(err);
		});
});

export { router as allocateContainerRouter };
