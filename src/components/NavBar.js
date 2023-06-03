import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	MuiAppBar: {
		backgroundColor: "#662E9B",
	},
}));

const NavBar = () => {
	const classes = useStyles();

	return (
		<AppBar position='static' className={classes.MuiAppBar}>
			<Toolbar>
				<Typography variant='h6' className={classes.title}>
					Resume Builder
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default NavBar;
