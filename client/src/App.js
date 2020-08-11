import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import PublicRoute from "./hocs/PublicRoute";
import PrivateRoute from "./hocs/PrivateRoute";
import theme from "./theme";
import AuthProvider from "./Context/AuthContext";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Register from "./Components/Register";
import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

const App = () => {
	const themeConfig = createMuiTheme(theme);

	return (
		<ThemeProvider theme={themeConfig}>
			<CssBaseline />
			<AuthProvider>
				<Router basename={process.env.PUBLIC_URL}>
					<Header />
					<Switch>
						<Route exact path="/" component={Home} />
						<PublicRoute exact path="/register" component={Register} />
						<PublicRoute exact path="/login" component={Login} />
						<PrivateRoute exact path="/dashboard" component={Dashboard} />
					</Switch>
				</Router>
			</AuthProvider>
		</ThemeProvider>
	);
};

export default App;