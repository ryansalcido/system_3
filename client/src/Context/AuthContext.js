import React, { useState, useEffect, createContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Loading from "../Components/shared/Loading";
import Grid from "@material-ui/core/Grid";
import axiosInstance from "../utils/axiosInstance";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
	root: {
		minHeight: "100vh",
		position: "relative"
	},
	loadingRoot: {
		minHeight: "inherit",
		backgroundColor: "#303030",
		//Set height to a value guaranteed to be less than minHeight to fix alignItems bug in IE11
		//Without manually settting height, content is not vertically aligned
		height: "5px"
	}
}));

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
	const classes = useStyles();
	const [ user, setUser ] = useState(null);
	const [ isAuthenticated, setIsAuthenticated ] = useState(false);
	const [ isLoaded, setIsLoaded ] = useState(false);

	useEffect(() => {
		let source = axiosInstance.CancelToken.source();
		axiosInstance.get("user/isAuthenticated", {cancelToken: source.token}).then(res => {
			const { isAuthenticated, user } = res.data && res.data.payload;
			setIsAuthenticated(isAuthenticated);
			setUser(user);
			setIsLoaded(true);
		}).catch(() => {
			setIsAuthenticated(false);
			setUser(null);
			setIsLoaded(true);
		});

		return () => source.cancel();
	}, []);

	return (
		<div className={classes.root}>
			{isLoaded 
				? (
					<AuthContext.Provider value={{isAuthenticated, setIsAuthenticated, user, setUser}}>
						{children}
					</AuthContext.Provider>
				) : (
					<Grid className={classes.loadingRoot} container justify="center" alignItems="center">
						<Loading />
					</Grid>
				)
			}
		</div>
	);
};

AuthProvider.propTypes = {
	children: PropTypes.object.isRequired
};

export default AuthProvider;