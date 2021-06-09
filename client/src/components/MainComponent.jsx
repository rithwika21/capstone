import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./navbar";
import { ImageManager } from "./images";
import { SystemManager } from "./systemsManager";

const MainComponent = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route component={ImageManager} path='/image' />
				<Route component={SystemManager} path='/systems' />
			</Switch>
		</BrowserRouter>
	);
};

export default MainComponent;
