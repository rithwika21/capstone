import { Grid, TextField, Container, Button } from "@material-ui/core";
import React from "react";
import LabSystem, { useStyles } from "./LabSystem";

export const AddRemotes = () => {
	const classes = useStyles();

	const [remotes, setRemotes] = React.useState([
		{
			username: "",
			ipaddress: "",
		},
	]);
	const [labName, setLabName] = React.useState("");

	const handleChange = (event, i) => {
		const newRemotes = [...remotes];
		newRemotes[i][event.target.name] = event.target.value;
		setRemotes(newRemotes);
	};

	// function to add a new remote
	const addRemote = () => {
		const newRemotes = [...remotes];
		newRemotes.push({
			username: "",
			ipaddress: "",
		});
		setRemotes(newRemotes);
		console.log(newRemotes);
	};

	// function to remove a remote
	const removeRemote = (i) => {
		const newRemotes = [...remotes];
		newRemotes.splice(i, 1);
		setRemotes(newRemotes);
	};

	return (
		<Container maxWidth='lg'>
			<div style={{ margin: "0 auto" }}>
				<h1>Add Lab Systems</h1>
				<form>
					<Grid container spacing={3}>
						<Grid item xs={12} sm={12} className={classes.inputBx}>
							<TextField
								variant='outlined'
								id='labname'
								label='Lab Name'
								type='text'
								name='labname'
								autoComplete='labname'
								color='primary'
								value={labName}
								onChange={(e) => setLabName(e.target.value)}
							/>
							<Button
								variant='contained'
								color='secondary'
								style={{ marginLeft: "20px" }}
							>
								Upload excel file
								<input type='file' hidden />
							</Button>
							<Button
								variant='contained'
								color='primary'
								onClick={addRemote}
								style={{ marginLeft: "20px" }}
							>
								Add Systems
							</Button>
						</Grid>
						<Grid item xs={12} sm={12}>
							{remotes.map((remote, i) => (
								<LabSystem
									key={i}
									index={i}
									remote={remote}
									handleChange={handleChange}
									removeRemote={removeRemote}
								/>
							))}
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
};
