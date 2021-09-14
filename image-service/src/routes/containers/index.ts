import { json } from "body-parser";
import { docker } from "../../utils/dockersock";
import express, { Request, Response } from "express";
import { createContainerRouter } from "./create";
import { allocateContainerRouter } from "./allocate";
import { saveContainerRouter } from "./save";
import { stopContainerRouter } from "./stop";

const router = express.Router();

router.use(json());
router.use(createContainerRouter);
router.use(allocateContainerRouter);
router.use(saveContainerRouter);
router.use(stopContainerRouter);
// router.use()

export { router as indexContainerRouter };
