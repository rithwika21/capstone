import React, { useReducer } from "react";
import {
	Container,
	makeStyles,
	TextField,
	Grid,
	Typography,
	Button,
	Tooltip,
	withStyles,
	InputAdornment,
} from "@material-ui/core";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
	form: {
		width: "100%",
		marginTop: "2rem",
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
		maxWidth: "200px",
	},
	inputBx: {
		position: "relative",
		display: "flex",
		alignItems: "center",
	},
	subtitle: {
		fontSize: "1.2rem",
		fontWeight: "400",
		color: "#333",
		margin: "1rem 0",
		width: "100%",
	},
	p: {
		color: "#333",
		opacity: "0.7",
	},
	innerSubtitle: {
		margin: "1rem 0 0.5rem 0.2rem",
		fontWeight: "400",
		color: "#333",
	},
}));

const LightTooltip = withStyles((theme) => ({
	tooltip: {
		backgroundColor: theme.palette.common.white,
		color: "rgba(0, 0, 0, 0.87)",
		boxShadow: theme.shadows[1],
		fontSize: 13,
		fontWeight: "400",
	},
}))(Tooltip);

export const AddRemotes = () => {
	const classes = useStyles();
	const initialState = {
		labName: "",
		userName: "",
		ipAddresses: [""],
	};
	const reducer = (state, action) => {
		const { type, payload } = action;
		if (type === "IP") {
			state.ipAddresses[payload.i] = payload.value;
			return state;
		} else if (type === "LABNAME") {
			console.log(payload);
			state.labName = payload.value;
			return state;
		} else if (type === "USERNAME") {
			state.userName = payload.value;
			return state;
		} else {
			return { ...state, [type]: payload };
		}
	};

	const addField = (type) => {
		if (type === "ip") {
			const newList = [...ipAddresses];
			newList.push("");
			dispatch({ type: "ipAddresses", payload: newList });
		}
	};

	const removeField = (type, index) => {
		if (type === "ip") {
			if (ipAddresses.length === 1) {
				return;
			}
			const newList = [...ipAddresses];
			newList.splice(index, 1);
			dispatch({ type: "ipAddresses", payload: newList });
		}
	};

	const [systemState, dispatch] = useReducer(reducer, initialState);

	const { labName, userName, ipAddresses } = systemState;

	return (
		<div>
			<Container component='main' maxWidth='md' style={{ marginTop: "2rem" }}>
				<Typography component='h2' variant='h5'>
					Add Remotes
				</Typography>
				<hr />

				<form
					className={classes.form}
					onSubmit={(e) => {
						e.preventDefault();
						console.log(systemState);
						axios.post("/api/systems/save", systemState);
					}}
				>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12} className={classes.inputBx}>
							<TextField
								variant='outlined'
								fullWidth
								id='labname'
								label='Lab Name'
								type='textarea'
								name='labname'
								// autoComplete='labname'
								color='primary'
								onChange={(e) =>
									dispatch({
										type: "LABNAME",
										payload: { value: e.target.value },
									})
								}
							/>
							<LightTooltip
								title='Name for these group of remote machines'
								placement='right'
								arrow
							>
								<div>
									<i class='uil uil-info-circle info__icon'></i>
								</div>
							</LightTooltip>
						</Grid>
						<Grid item xs={12} sm={12} className={classes.inputBx}>
							<Button variant='contained' component='label' color='primary'>
								Upload Private Key
								<input type='file' hidden />
							</Button>
							<LightTooltip
								title='primary key is used to ssh into the machines'
								placement='right'
								arrow
							>
								<div>
									<i class='uil uil-info-circle info__icon'></i>
								</div>
							</LightTooltip>
						</Grid>
						<Grid item xs={12} sm={12} className={classes.inputBx}>
							<TextField
								variant='outlined'
								fullWidth
								id='userName'
								label='User Name'
								placeholder='User Name'
								type='text'
								name='userName'
								autoComplete='userName'
								color='primary'
								onChange={(e) => {
									const data = e.target.value;
									dispatch({ type: "USERNAME", payload: { value: data } });
								}}
							/>
							<LightTooltip title='ssh username' placement='right' arrow>
								<div>
									<i class='uil uil-info-circle info__icon'></i>
								</div>
							</LightTooltip>
						</Grid>
						{ipAddresses.map((item, i) => {
							return (
								<Grid item xs={12} sm={12} className={classes.inputBx}>
									<TextField
										variant='outlined'
										required
										fullWidth
										id='imageName'
										label='Add ip addresse'
										type='text'
										name='imageName'
										autoComplete='image'
										color='primary'
										onChange={(e) => {
											const data = { i, value: e.target.value };
											dispatch({ type: "IP", payload: data });
										}}
										InputProps={{
											startAdornment: (
												<InputAdornment position='start'>ip</InputAdornment>
											),
										}}
									/>
									<div className='add_remove'>
										{ipAddresses.length === i + 1 && (
											<i
												className='uil uil-plus-circle add__icon'
												onClick={() => addField("ip")}
											></i>
										)}
										<i
											className='uil uil-minus-circle remove__icon'
											onClick={() => removeField("ip", i)}
										></i>
									</div>
									<LightTooltip
										title='The COPY instruction copies new files or directories from <src> and adds them to 
									the filesystem of the container at the path <dest>.Multiple <src> resources may be 
									specified but the paths of files and directories will be interpreted as relative to 
									the source of the context of the build.'
										placement='right'
										arrow
									>
										<div>
											<i className='uil uil-info-circle info__icon'></i>
										</div>
									</LightTooltip>
								</Grid>
							);
						})}
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='secondary'
						className={classes.submit}
					>
						Submit
					</Button>
				</form>
			</Container>
		</div>
	);
};
