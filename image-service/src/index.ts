import { app } from "./app";
import axios from "axios";

const start = async () => {
	//* can add other options or configurations, like connecting to the database

	app.listen(5000, () => {
		console.log("started...");
	});
};

start();
