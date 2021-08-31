import mongoose, { Schema } from "mongoose";

const SystemSchema = new Schema(
	{
		categoryName: {
			type: String,
			requried: true,
		},
		privateKey: {
			type: Buffer,
			// required: true,
		},
		fileName: {
			type: String,
			// required: true,
		},
		mimeType: {
			type: String,
			// required: true,
		},
		userName: {
			type: String,
			required: true,
		},
		ipAddresses: {
			type: [String],
			required: true,
		},
	},
	{
		timestamps: {
			createdAt: "createdAt",
			updatedAt: "updatedAt",
		},
	}
);

const System = mongoose.model("System", SystemSchema, "system");
// || mongoose.model("system", SystemSchema, "system");

export default System;
