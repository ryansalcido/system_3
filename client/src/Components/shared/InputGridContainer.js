import React from "react";
import Grid from "@material-ui/core/Grid";
import PropTypes from "prop-types";

const InputGridContainer = ({ children, innerGridProps }) => {
	return (
		<Grid container item justify="center">
			<Grid item xs={11} sm={7} md={5} lg={3} {...innerGridProps}>
				{children}
			</Grid>
		</Grid>
	);
};

InputGridContainer.propTypes = {
	children: PropTypes.object.isRequired,
	innerGridProps: PropTypes.object
};

InputGridContainer.defaultProps = {
	innerGridProps: {}
};

export default InputGridContainer;