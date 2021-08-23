import { model, Schema } from "mongoose";

const ContainerSchema = new Schema(
	{
		imageName: String,
		containerName: String,
		state: String,
	},
	{
		timestamps: {
			createdAt: "createdAt",
			updatedAt: "updatedAt",
		},
	}
);

const ContainerModel = model("containers", ContainerSchema, "containers");

export default ContainerModel;
