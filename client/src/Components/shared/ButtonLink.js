import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const useStyles = makeStyles(() => ({
	buttonLinkRoot: {
		color: "black",
		fontWeight: "bold"
	}
}));

const ButtonLink = ({ to, text }) => {
	const classes = useStyles();

	return (
		<Button component={Link} to={to} classes={{root: classes.buttonLinkRoot}}>{text}</Button>
	);
};

ButtonLink.propTypes = {
	to: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired
};

export default ButtonLink;