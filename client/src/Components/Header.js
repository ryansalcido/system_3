import React, { Fragment, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { AuthContext } from "../Context/AuthContext";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import System3 from "../assets/images/System3.png";
import ButtonLink from "./shared/ButtonLink";

const useStyles = makeStyles(() => ({
	appBar: {
		minHeight: 40
	},
	toolbar: {
		minHeight: 40
	}
}));

const Header = () => {
	const classes = useStyles();
	const { isAuthenticated } = useContext(AuthContext);

	return (
		<AppBar color="primary" position="static" className={classes.appBar}>
			<Toolbar className={classes.toolbar}>
				<Grid container alignItems="center" justify="space-between">
					<img src={System3} alt="SYSTEM III" width="125" height="15" />
					<Grid item>
						{isAuthenticated
							? (
								<Fragment>
									<ButtonLink to="/" text="home" />
									<ButtonLink to="/dashboard" text="dashboard" />
								</Fragment>
							) : (
								<Fragment>
									<ButtonLink to="/" text="home" />
									<ButtonLink to="/register" text="register" />
									<ButtonLink to="/login" text="login" />
								</Fragment>
							)
						}
					</Grid>
				</Grid>
			</Toolbar>
		</AppBar>
	);
};

export default Header;