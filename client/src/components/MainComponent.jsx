import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { CreationForm } from "./images";
import { DeploymentForm } from "./deployments";
import { SystemManager } from "./systemsManager";
import { Home } from "./home";

const MainComponent = () => {
	return (
		<BrowserRouter>
			<Switch>
				<Route component={Home} path="/" exact />
				<Route component={CreationForm} path="/createImage" />
				<Route component={DeploymentForm} path="/deploy" />
				<Route component={SystemManager} path="/systems" />
			</Switch>
		</BrowserRouter>
	);
};

export default MainComponent;
