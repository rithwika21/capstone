import React from "react";
import { Link } from "react-router-dom";
import { AppBar, Toolbar, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	toolbar: {
		display: "flex",
		justifyContent: "space-between",
	},
	navlink: {
		margin: "0 1rem",
		fontSize: "18px",
		fontWeight: "400",
		textDecoration: "none",
		color: "unset",
		"&:hover": {
			textDecoration: "underline",
		},
		cursor: "pointer",
	},
}));

export default function NavBar() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<AppBar position='static' className={classes.AppBar} elevation={2}>
				<Toolbar variant='dense' className={classes.toolbar}>
					<IconButton
						edge='start'
						className={classes.menuButton}
						color='inherit'
						aria-label='menu'
					>
						<i class='uil uil-list-ul'></i>
					</IconButton>
					<div style={{ display: "flex" }}>
						<Link
							to='/imagemanager'
							variant='h6'
							color='inherit'
							className={classes.navlink}
						>
							Image
						</Link>
						<Link
							to='/systems'
							variant='h6'
							color='inherit'
							className={classes.navlink}
						>
							Systems
						</Link>

					</div>
				</Toolbar>
			</AppBar>
		</div>
	);
}
