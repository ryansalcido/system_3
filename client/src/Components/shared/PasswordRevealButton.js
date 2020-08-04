import React from "react";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import PropTypes from "prop-types";

const PasswordRevealButton = ({ showPassword, onClick }) => {

	return (
		<InputAdornment position="end">
			<IconButton edge="start" onClick={onClick}>
				{showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
			</IconButton>
		</InputAdornment>
	);
};

PasswordRevealButton.propTypes = {
	showPassword: PropTypes.bool.isRequired,
	onClick: PropTypes.func.isRequired
};

export default PasswordRevealButton;