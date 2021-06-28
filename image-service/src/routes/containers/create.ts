import { json } from "body-parser";
import { docker } from "../../utils/dockersock";
import express, { Request, Response } from "express";
import Dockerode, { ContainerInfo } from "dockerode";

const router = express.Router();

router.use(json());
router.post("/create", async (req: Request, res: Response) => {
	const { baseImage, imageTag, containerName } = req.body;
	//tty:true
	var auxContainer;

	// docker.run(
	// 	"ubuntu",
	// 	["bash", "-c", "uname -a"],
	// 	process.stdout,
	// 	(err: any, data: any, container: Dockerode.Container) => {
	// 		console.log(data.statusCode);
	// 	}
	// );
	docker.pull("ubuntu:18.04", (err: any, stream: any) => {
		stream.pipe(process.stdout);
	});
	// docker.createContainer(
	// 	{
	// 		Image: "ubuntu:18.04",
	// 		Cmd: ["/bin/bash"],
	// 		name: containerName,
	// 		Tty: true,
	// 	},
	// 	(err, container) => {
	// 		if (err) {
	// 			console.log(err);
	// 		}
	// 		container?.start((err, data) => {
	// 			if (err) {
	// 				console.log(err);
	// 			}
	// 			console.log({ data });
	// 		});
	// 	}
	// );
});

export { router as createContainerRouter };
