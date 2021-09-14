import { Button } from "@material-ui/core";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";
import ContainerImage from "../Imagemanager/ContainerImage";

export const ImageDefault = () => {
	const [open, setOpen] = React.useState(false);

	const handleClickOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	let { path } = useRouteMatch();

	return (
		<div style={{ margin: "1rem 1rem", display: "flex" }}>
			<Button
				variant='contained'
				color='secondary'
				style={{ marginRight: "10px" }}
			>
				<Link
					to={`${path}/view`}
					style={{ textDecoration: "none", color: "#fff" }}
				>
					View Images
				</Link>
			</Button>
			<ContainerImage
				open={open}
				handleClickOpen={handleClickOpen}
				handleClose={handleClose}
			/>
			<Button
				variant='contained'
				color='secondary'
				style={{ marginLeft: "10px" }}
			>
				<Link
					to={`${path}/images_running`}
					style={{ textDecoration: "none", color: "#fff" }}
				>
					Images Created				
				</Link>
			</Button>
		</div>
	);
};
