import React, { useState, createContext } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import PropTypes from "prop-types";

export const SnackbarContext = createContext();

const SnackbarProvider = ({ children }) => {
	const [ snackbar, setSnackbar ] = useState({isOpen: false, severity: "info", message: ""});

	const handleClose = (event, reason) => {
		if(reason === "clickaway") return;
		setSnackbar({isOpen: false, message: "", severity: "info"});
	};

	const openSnackbar = (value) => {
		setSnackbar({isOpen: true, ...value});
	};

	return (
		<SnackbarContext.Provider value={{snackbar, setSnackbar, openSnackbar}}>
			<Snackbar autoHideDuration={5000} open={snackbar.isOpen} onClose={handleClose}>
				<Alert variant="filled" onClose={handleClose} severity={snackbar.severity}>
					{snackbar.message}
				</Alert>
			</Snackbar>
			{children}
		</SnackbarContext.Provider>
	);
};

SnackbarProvider.propTypes = {
	children: PropTypes.object.isRequired
};

export default SnackbarProvider;