import { json } from "body-parser";
import express, { Request, Response } from "express";
import multer from "multer";
import System from "../../models/system";

const upload = multer();

const router = express.Router();
router.use(json());

interface SaveSystemRequest extends Request {
	file: Express.Multer.File;
}

router.post(
	"/save",
	// upload.single("privateKey"),
	// @ts-ignore
	async (req: SaveSystemRequest, res: Response) => {
		const { categoryName, userName, ipAddresses } = req.body;

		const sysDoc = await System.create({
			categoryName,
			userName,
			ipAddresses,
			// privateKey: req.file.buffer,
			// mimeType: req.file.mimetype,
			// fileName: req.file.filename,
		}).catch(console.error);

		if (sysDoc) {
			res.end();
		} else {
			res.status(500);
			res.json({
				message: "Failed to store the system information in the DB",
			});
			res.end();
		}
	}
);

export { router as SaveSystemRouter };
