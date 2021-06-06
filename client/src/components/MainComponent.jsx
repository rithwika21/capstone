import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CreationForm } from "./images";
import { DeploymentForm } from "./deployments";
import NavBar from "./navbar";

const MainComponent = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route component={CreationForm} path='/createImage' />
				<Route component={DeploymentForm} path='/deploy' />
			</Switch>
		</BrowserRouter>
	);
};

export default MainComponent;
