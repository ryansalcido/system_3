import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";
import PropTypes from "prop-types";

const PublicRoute = ({component: Component, ...rest}) => {
	const { isAuthenticated } = useContext(AuthContext);

	return (
		<Route {...rest} render={(props) => {
			if(isAuthenticated) {
				return <Redirect to={{pathname: "/dashboard", state: {from: props.location}}} />;
			} else {
				return <Component {...props} />;
			}
		}} />
	);
};

PublicRoute.propTypes = {
	component: PropTypes.func.isRequired,
	location: PropTypes.object
};

export default PublicRoute;