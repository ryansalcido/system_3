import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

const InputGridContainer = ({ children }) => {
	return (
		<Grid container item justify="center" xs={11} sm={7} md={5} lg={3}>
			{children}
		</Grid>
	);
};

InputGridContainer.propTypes = {
	children: PropTypes.object.isRequired
};

export default InputGridContainer;