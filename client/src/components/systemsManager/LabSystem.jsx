import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
	inputBx: {
		position: "relative",
		display: "flex",
		alignItems: "center",
	},
	labs: {
		marginTop: "20px",
		marginBottom: "20px",
		border: "1px solid #e0e0e0",
	},
	changeButton: {
		margin: "10px",
		flaot: "right",
	},
}));

const LabSystem = ({ removeRemote, handleChange }) => {
	const classes = useStyles();
	return (
		<div>
			<Grid container spacing={3} className={classes.labs}>
				<Grid item xs={12} sm={12} className={classes.inputBx}>
					<TextField
						variant='outlined'
						fullWidth
						id='imageName'
						label='User Name'
						type='text'
						name='imageName'
						autoComplete='image'
						onChange={handleChange}
						color='primary'
					/>
				</Grid>
				<Grid item xs={12} sm={12} className={classes.inputBx}>
					<TextField
						variant='outlined'
						fullWidth
						id='imageName'
						label='IP Address'
						type='text'
						name='imageName'
						autoComplete='image'
						onChange={handleChange}
						color='primary'
					/>
				</Grid>
				<Button
					variant='contained'
					color='primary'
					className={classes.changeButton}
					onClick={removeRemote}
				>
					remove system
				</Button>
			</Grid>
		</div>
	);
};

export default LabSystem;
