import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import PropTypes from "prop-types";

const PrivateRoute = ({component: Component, ...rest}) => {
	const { isAuthenticated } = useContext(AuthContext);
	
	return (
		<Route {...rest} render={(props) => {
			if(isAuthenticated) {
				return <Component {...props} />;
			} else {
				return <Redirect to={{pathname: "/login", state: {from: props.location}}} />;
			}
		}} />
	);
};

PrivateRoute.propTypes = {
	component: PropTypes.func.isRequired,
	location: PropTypes.object
};

export default PrivateRoute;