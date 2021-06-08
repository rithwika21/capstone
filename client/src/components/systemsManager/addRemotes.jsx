import React, { useReducer } from "react";
import {
	Container,
	makeStyles,
	TextField,
	Grid,
	Typography,
	InputAdornment,
	Button,
	Tooltip,
	withStyles,
} from "@material-ui/core";

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

const reducer = (state, action) => {
	const { type, payload } = action;
	if (type === "COPY") {
		state.copyList[payload.i].COPY = payload.value;
		return state;
	} else if (type === "RUN") {
		state.runList[payload.i].RUN = payload.value;
		return state;
	} else {
		return { ...state, [type]: payload };
	}
};

export const AddRemotes = () => {
	const initialState = {
		FROM: "",
		WORKDIR: "",
		copyList: [
			{
				COPY: "",
			},
		],
		runList: [
			{
				RUN: "",
			},
		],
		envList: [],
		CMD: [],
		otherList: [],
	};
	const classes = useStyles();
	const [imageState, dispatch] = useReducer(reducer, initialState);

	const { FROM, WORKDIR, copyList, runList, envList, CMD, otherList } =
		imageState;

	const addField = (type) => {
		if (type === "copy") {
			const newList = [...copyList];
			newList.push({
				COPY: "",
			});
			dispatch({ type: "copyList", payload: newList });
		} else if (type === "run") {
			const newList = [...runList];
			newList.push({
				RUN: "",
			});
			dispatch({ type: "runList", payload: newList });
		}
	};

	const removeField = (type, index) => {
		if (type === "copy") {
			if (copyList.length === 1) {
				return;
			}
			const newList = [...copyList];
			newList.splice(index, 1);
			dispatch({ type: "copyList", payload: newList });
		} else if (type === "run") {
			if (runList.length === 1) {
				return;
			}
			const newList = [...runList];
			newList.splice(index, 1);
			dispatch({ type: "runList", payload: newList });
		}
	};

	return (
		<div>
			<Container component='main' style={{ marginTop: "2rem" }}>
				<Typography component='h2' variant='h5'>
					Add Remotes
				</Typography>
				<hr />
				
				<form className={classes.form}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12} className={classes.inputBx}>
							<TextField
								variant='outlined'
								fullWidth
								id='category'
								label='Category'
								type='text'
								name='category'
								autoComplete='category'
								color='primary'
							/>
							<LightTooltip title='Name for these group of remote machines' placement='right' arrow>
								<div>
									<i class='uil uil-info-circle info__icon'></i>
								</div>
							</LightTooltip>
						</Grid>
						<Grid item xs={12} sm={12} className={classes.inputBx}>
							<TextField
								variant='outlined'
								fullWidth
								id='privateKey'
								label='Private Key'
								type='textarea'
								name='privateKey'
								autoComplete='privateKey'
								color='primary'
							/>
							<LightTooltip title='primary key is used to ssh into the machines' placement='right' arrow>
								<div>
									<i class='uil uil-info-circle info__icon'></i>
								</div>
							</LightTooltip>
						</Grid>
						<Grid item xs={12} sm={12} className={classes.inputBx}>
							<TextField
								variant='outlined'
								fullWidth
								id='userNames'
								label='User Names'
								type='textarea'
								name='userNames'
								autoComplete='userNames'
								color='primary'
							/>
							<LightTooltip title='ssh username' placement='right' arrow>
								<div>
									<i class='uil uil-info-circle info__icon'></i>
								</div>
							</LightTooltip>
						</Grid>
						<Grid item xs={12} sm={12} className={classes.inputBx}>
							<TextField
								variant='outlined'
								fullWidth
								id='ipAddresses'
								label='ip address'
								type='textarea'
								name='ipAddresses'
								autoComplete='ipAddresses'
								color='primary'
							/>
							<LightTooltip title='ip addresses of remote machines' placement='right' arrow>
								<div>
									<i class='uil uil-info-circle info__icon'></i>
								</div>
							</LightTooltip>
						</Grid>
						
						
						
						
						
						
						
						
					</Grid>
					<Button
						type='submit'
						fullWidth
						variant='contained'
						color='primary'
						className={classes.submit}
					>
						Submit
					</Button>
				</form>
			</Container>
		</div>
	);
};

