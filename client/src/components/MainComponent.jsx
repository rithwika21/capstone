import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./navbar";
import { ImageManager } from "./images";
import { SystemManager } from "./systemsManager";
import Dashboard from "./Imagemanager/dashboard";

const MainComponent = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route component={SystemManager} path='/systems' />
				<Route component={ImageManager} path="/imagemanager" />
			</Switch>
		</BrowserRouter>
	);
};

export default MainComponent;
