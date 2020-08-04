import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputGridContainer from "./InputGridContainer";
import TextField from "@material-ui/core/TextField";
import { useField } from "formik";

const useStyles = makeStyles(() => ({
	textFieldRoot: {
		//Hide Microsoft reveal button on type=password input
		"& input::-ms-reveal": {
			display: "none",
			width: 0,
			height: 0
		}
	}
}));

const InputField = (props) => {
	const classes = useStyles();
	const [ field, meta ] = useField(props);
	// console.log("FIELD: ", field);
	// console.log("META: ", meta);
	// console.log("PROPS: ", props);

	return (
		<InputGridContainer>
			<TextField size="small" variant="outlined" fullWidth type="text" 
				helperText={meta.touched && meta.error} className={classes.textFieldRoot}
				error={meta.touched && meta.error ? true : false} {...field} {...props} />
		</InputGridContainer>
	);
};

export default InputField;