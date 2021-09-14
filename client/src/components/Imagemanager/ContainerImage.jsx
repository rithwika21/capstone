import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Slide from "@material-ui/core/Slide";
import { useHistory } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
	return <Slide direction='up' ref={ref} {...props} />;
});

export default function ContainerImage({ open, handleClose, handleClickOpen }) {
	const history = useHistory();
	return (
		<div>
			<Button variant='contained' color='secondary' onClick={handleClickOpen}>
				Create Image
			</Button>
			<Dialog
				open={open}
				TransitionComponent={Transition}
				keepMounted
				onClose={handleClose}
				aria-labelledby='alert-dialog-slide-title'
				aria-describedby='alert-dialog-slide-description'
			>
				<DialogTitle id='alert-dialog-slide-title'>
					Start from an existing image?
				</DialogTitle>
				<DialogContent>
					<DialogContentText id='alert-dialog-slide-description'>
						Click on Yes if you want to select an image from the catalog, to
						create a new one. And No if you want to start from scratch.
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button
						onClick={() => {
							history.push("/imagemanager/view");
						}}
						color='primary'
					>
						YES
					</Button>
					<Button
						onClick={() => {
							history.push("/imagemanager/create");
						}}
						color='primary'
					>
						NO
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
}
