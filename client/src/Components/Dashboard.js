import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";

const Dashboard = () => {
	const { user } = useContext(AuthContext);

	return (
		<div>
			Hello: {user.name}
		</div>
	);
};

export default Dashboard;