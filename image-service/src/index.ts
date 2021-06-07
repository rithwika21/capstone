import { app } from "./app";
import { exec } from "child_process";
// import Docker from "dockerode";
// var docker = new Docker({ protocol: "http", host: "localhost", port: 2375 });

const start = async () => {
	console.log("Starting up.....");

	// docker.listContainers(function (err: any, containers: any) {
	// 	containers.forEach(function (containerInfo: any) {
	// 		console.log(containerInfo);
	// 	});
	// });

	exec("docker ps", (err: any, stdout: any, stderr: any) => {
		if (err) {
			console.log(err);
		}
		if (stdout) {
			console.log(stdout);
		}
		if (stderr) {
			console.log(stderr);
		}
	});

	app.listen(5000, () => {
		console.log("started...");
	});
};

start();
