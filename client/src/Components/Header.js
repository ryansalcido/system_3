import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import System3 from "../assets/images/System3.png";

const useStyles = makeStyles(() => ({
	appBar: {
		minHeight: 40
	},
	toolbar: {
		minHeight: 40
	},
	buttonRoot: {
		color: "black"
	}
}));

const Header = () => {
	const classes = useStyles();

	return (
		<AppBar color="primary" position="static" className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<Grid container alignItems="center" justify="space-between">
					<img src={System3} alt="SYSTEM III" width="125" height="15" />
					<Button component={Link} to="/register" classes={{root: classes.buttonRoot}}>register</Button>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Header;