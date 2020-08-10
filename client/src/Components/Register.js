import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import InputField from "./shared/InputField";
import InputGridContainer from "./shared/InputGridContainer";
import PasswordRevealButton from "./shared/PasswordRevealButton";
import PersonOutlineOutlinedIcon from "@material-ui/icons/PersonOutlineOutlined";
import CreateIcon from "@material-ui/icons/Create";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { SnackbarContext } from "../Context/SnackbarContext";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axiosInstance from "../utils/axiosInstance";

const validationSchema = Yup.object({
	name: Yup.string()
		.min(3, "Must be at least 3 characters")
		.required("Required"),
	email: Yup.string()
		.email("Invalid email address")
		.required("Required"),
	password: Yup.string()
		.min(8, "Must be at least 8 characters")
		.required("Required")
});

const useStyles = makeStyles(theme => ({
	registerRoot: {
		padding: theme.spacing(2)
	},
	personAvatar: {
		backgroundColor: "#f50057"
	}
}));

const Register = () => {
	const classes = useStyles();
	const { openSnackbar } = useContext(SnackbarContext);
	const history = useHistory();
	const [ showPassword, setShowPassword ] = useState(false);

	const onRegisterSubmit = (values, { setFieldError, resetForm }) => {
		axiosInstance.post("user/register", values).then(res => {
			const { payload } = res.data;
			resetForm();
			openSnackbar({message: payload, severity: "success"});
			history.push("/login");
		}).catch(error => {
			const { payload } = error.response && error.response.data;
			if(payload === "Email is already in use.") {
				setFieldError("email", payload);
				openSnackbar({message: payload, severity: "error"});
			}
		});
	};

	return (
		<div className={classes.registerRoot}>
			<Formik initialValues={{name: "", email: "", password: ""}} 
				validationSchema={validationSchema} onSubmit={onRegisterSubmit}>
				{({ dirty, isValid }) => (
					<Form>
						<Grid container alignItems="center" spacing={2} direction="column">
							<Typography variant="h4" color="secondary" gutterBottom>Register</Typography>
							<Avatar className={classes.personAvatar}>
								<PersonOutlineOutlinedIcon />
							</Avatar>
							<InputField label="Full Name" name="name" type="text" />
							<InputField label="Email" name="email" type="email" />
							<InputField label="Password" name="password"
								type={showPassword ? "text" : "password"}
								InputProps={{endAdornment: 
									<PasswordRevealButton showPassword={showPassword}
										onClick={() => setShowPassword(showPassword => !showPassword)} />
								}} />
							<InputGridContainer>
								<Button variant="contained" fullWidth startIcon={<CreateIcon />} 
									type="submit" color="primary" disabled={!(dirty && isValid)}>
									register
								</Button>
							</InputGridContainer>
							<InputGridContainer innerGridProps={{container: true, justify: "center"}}>
								<Link variant="body2" color="secondary" href="/system-3/login">Already have an account? Sign in</Link>
							</InputGridContainer>
						</Grid>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Register;
