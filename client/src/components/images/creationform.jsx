import React from "react";
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

export const CreationForm = () => {
	const classes = useStyles();

	return (
		<div>
			<Container component='main' style={{ marginTop: "2rem" }}>
				<Typography component='h2' variant='h5'>
					Image Creation
				</Typography>
				<hr />
				<Typography component='p' className={classes.p}>
					A Docker image is a file used to execute code in a Docker container.
					Docker images act as a set of instructions to build a Docker
					container, like a template. Docker images also act as the starting
					point when using Docker. An image is comparable to a snapshot in
					virtual machine (VM) environments.
				</Typography>
				<form className={classes.form}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={12} className={classes.inputBx}>
							<TextField
								variant='outlined'
								fullWidth
								id='imageName'
								label='Image Name'
								type='text'
								name='imageName'
								autoComplete='image'
								color='primary'
							/>
							<LightTooltip title='Add' placement='right' arrow>
								<div>
									<i class='uil uil-info-circle info__icon'></i>
								</div>
							</LightTooltip>
						</Grid>
						<Grid item xs={12} sm={12} className={classes.inputBx}>
							<TextField
								variant='outlined'
								fullWidth
								id='description'
								label='Description (optoinal)'
								type='textarea'
								name='description'
								autoComplete='description'
								color='primary'
							/>
							<LightTooltip title='Add' placement='right' arrow>
								<div>
									<i class='uil uil-info-circle info__icon'></i>
								</div>
							</LightTooltip>
						</Grid>
						<Typography component='p' variant='p' className={classes.subtitle}>
							Dockerfile Arguments
							<hr />
							<Typography className={classes.p}>
								A Dockerfile is a text document that contains all the commands a
								user could call on the command line to assemble an image. Using
								docker build users can create an automated build that executes
								several command-line instructions in succession.
							</Typography>
						</Typography>
						<Grid item xs={12} sm={12} className={classes.inputBx}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='baseImageName'
								label='Enter the base image'
								type='text'
								name='baseImageName'
								autoComplete='image'
								color='primary'
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>FROM</InputAdornment>
									),
								}}
							/>
							<LightTooltip
								title='The FROM instruction initializes a new build
                 stage and sets the Base Image for subsequent instructions.
                 As such, a valid Dockerfile must start with a FROM instruction.
                 The image can be any valid image – it is especially easy to start by pulling an image from the Public Repositories.'
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
								required
								fullWidth
								id='workdir'
								label='Enter the working directory'
								type='text'
								name='workdir'
								autoComplete='workdir'
								color='primary'
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>WORKDIR</InputAdornment>
									),
								}}
							/>
							<LightTooltip title='Add' placement='right' arrow>
								<div>
									<i class='uil uil-info-circle info__icon'></i>
								</div>
							</LightTooltip>
						</Grid>
						<Grid item xs={12} sm={12} className={classes.inputBx}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='imageName'
								label='Copy files from - to'
								type='text'
								name='imageName'
								autoComplete='image'
								color='primary'
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>COPY</InputAdornment>
									),
								}}
							/>
							<LightTooltip title='Add' placement='right' arrow>
								<div>
									<i class='uil uil-info-circle info__icon'></i>
								</div>
							</LightTooltip>
						</Grid>
						<Grid item xs={12} sm={12} className={classes.inputBx}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='imageName'
								label='Enter the shell command'
								type='text'
								name='imageName'
								autoComplete='image'
								color='primary'
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>RUN</InputAdornment>
									),
								}}
							/>
							<LightTooltip title='Add' placement='right' arrow>
								<div>
									<i class='uil uil-info-circle info__icon'></i>
								</div>
							</LightTooltip>
						</Grid>
						<Grid item xs={12} sm={12} className={classes.inputBx}>
							<TextField
								variant='outlined'
								required
								fullWidth
								id='imageName'
								label='Enter the primary command/entrypoint'
								type='text'
								name='imageName'
								autoComplete='image'
								color='primary'
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>CMD</InputAdornment>
									),
								}}
							/>
							<LightTooltip title='Add' placement='right' arrow>
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
