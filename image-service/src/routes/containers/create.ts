import { json } from "body-parser";
import { docker } from "../../utils/dockersock";
import express, { Request, Response } from "express";
import Dockerode, { ContainerInfo } from "dockerode";

const router = express.Router();

const pullImage = (baseImage: string) => {
	return new Promise((reject, resolve) => {
		docker.pull(baseImage, (err: any, stream: any) => {
			if (err) {
				reject(err);
			} else {
				stream.pipe(process.stdout);
				resolve({ status: "ok" });
			}
		});
	});
};

router.use(json());
router.post("/create", async (req: Request, res: Response) => {
	const { baseImage, imageTag, containerName } = req.body;
	//tty:true
	interface pullResponse {
		status: "ok";
	}
	docker.createContainer(
		{
			Image: "sspreitzer/shellinabox:ubuntu",
			// Cmd: ["/bin/bash"],
			name: "shellinabox-demp",
			Tty: true,
			Env: ["SIAB_PASSWORD=xyz678abc", "SIAB_SUDO=true"],
			ExposedPorts: { "4200/tcp": {} },
		},
		(err, container) => {
			if (err) {
				console.log(err);
			}
			container?.start((err, data) => {
				if (err) {
					console.log(err);
				}
				console.log({ data });
			});
		}
	);
});

export { router as createContainerRouter };
