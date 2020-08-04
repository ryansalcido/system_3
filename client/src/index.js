import "react-app-polyfill/ie11";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SnackbarProvider from "./Context/SnackbarContext";

ReactDOM.render(
	<SnackbarProvider>
		<App />
	</SnackbarProvider>,
	document.getElementById("root")
);