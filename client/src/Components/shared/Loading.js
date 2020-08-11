import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
	"@keyframes rotate": {
		to: {
			transform: "rotate(360deg)"
		}
	},
	loading: {
		width: 200,
		height: 200,
		boxSizing: "border-box",
		borderRadius: "50%",
		borderTop: "10px solid #e74c3c",
		position: "relative",
		animation: "$rotate 2s linear infinite",
		"&::before, &::after": {
			content: "''",
			width: 200,
			height: 200,
			position: "absolute",
			left: 0,
			top: -10,
			boxSizing: "border-box",
			borderRadius: "50%"
		},
		"&::before": {
			borderTop: "10px solid #e67e22",
			transform: "rotate(120deg)"
		},
		"&::after": {
			borderTop: "10px solid #3BC7F5",
			transform: "rotate(240deg)"
		}
	}
}));

const Loading = () => {
	const classes = useStyles();
	return (
		<div className={classes.loading} />
	);
};

export default Loading;