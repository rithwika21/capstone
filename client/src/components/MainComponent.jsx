import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { DeploymentForm } from "./deployments";
import NavBar from "./navbar";
import {ImageManager} from "./images";

const MainComponent = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route component={DeploymentForm} path='/deploy' />
				<Route component={ImageManager} path='/image' />
			</Switch>
		</BrowserRouter>
	);
};

export default MainComponent;
