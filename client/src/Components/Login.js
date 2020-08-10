import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import Grid from "@material-ui/core/Grid";
import InputGridContainer from "./shared/InputGridContainer";
import InputField from "./shared/InputField";
import PasswordRevealButton from "./shared/PasswordRevealButton";
import Link from "@material-ui/core/Link";
import { SnackbarContext } from "../Context/SnackbarContext";
import { AuthContext } from "../Context/AuthContext";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axiosInstance from "../utils/axiosInstance";

const validationSchema = Yup.object({
	email: Yup.string()
		.email("Invalid email address")
		.required("Required"),
	password: Yup.string()
		.required("Required")
});

const useStyles = makeStyles(theme => ({
	loginRoot: {
		padding: theme.spacing(2)
	},
	personAvatar: {
		backgroundColor: "#f50057"
	}
}));

const Login = () => {
	const classes = useStyles();
	const { openSnackbar } = useContext(SnackbarContext);
	const { setIsAuthenticated, setUser } = useContext(AuthContext);
	const [ showPassword, setShowPassword ] = useState(false);

	const onLoginSubmit = (values) => {
		axiosInstance.post("user/login", values).then(res => {
			const { isAuthenticated, user, message } = res.data && res.data.payload;
			openSnackbar({message, severity: "success"});
			setUser(user);
			setIsAuthenticated(isAuthenticated);
		}).catch(error => {
			if(error.response && error.response.status === 401) {
				openSnackbar({message: "The email or password you have entered is invalid.", severity: "error"});
			}
		});
	};

	return (
		<div className={classes.loginRoot}>
			<Formik initialValues={{email: "", password: ""}} 
				validationSchema={validationSchema} onSubmit={onLoginSubmit}>
				{({ dirty, isValid }) => (
					<Form>
						<Grid container alignItems="center" spacing={2} direction="column">
							<Typography variant="h4" color="secondary" gutterBottom>Login</Typography>
							<Avatar className={classes.personAvatar}>
								<LockOutlinedIcon />
							</Avatar>
							<InputField label="Email" name="email" type="email" />
							<InputField label="Password" name="password"
								type={showPassword ? "text" : "password"}
								InputProps={{endAdornment: 
									<PasswordRevealButton showPassword={showPassword}
										onClick={() => setShowPassword(showPassword => !showPassword)} />
								}} />
							<InputGridContainer>
								<Button variant="contained" fullWidth startIcon={<ExitToAppIcon />} 
									type="submit" color="primary" disabled={!(dirty && isValid)}>
									login
								</Button>
							</InputGridContainer>
							<InputGridContainer innerGridProps={{container: true, justify: "center"}}>
								<Link variant="body2" color="secondary" href="/system-3/register">
									{"Don't have an account? Sign Up"}
								</Link>
							</InputGridContainer>
						</Grid>
					</Form>
				)}
			</Formik>
		</div>
	);
};

export default Login;