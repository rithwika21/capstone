import { json } from "body-parser";
import { docker } from "./../utils/dockersock";
import express, { Request, Response } from "express";
import { ContainerInfo } from "dockerode";

const router = express.Router();

router.use(json());
router.get("/api/images/all", async (req: Request, res: Response) => {
	docker.listContainers(function (err: Error, containers: ContainerInfo[]) {
		containers.forEach(function (containerInfo) {
			// docker.getContainer(containerInfo.Id);
			res.send({ containers });
		});
	});
});

export { router as indexImageRouter };
