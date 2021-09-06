import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NavBar from "./navbar";
import { ImageManager } from "./images";
import { SystemManager } from "./systemsManager";
// import { View } from "./View";
import {ViewRemotes} from "./systemsManager";
const MainComponent = () => {
	return (
		<BrowserRouter>
			<NavBar />
			<Switch>
				<Route component={SystemManager} path='/systems' />
				<Route component={ImageManager} path='/imagemanager' />
				{/* <Route component={View} exact path='/container/view' /> */}
				<Route component={ViewRemotes} path={`/view`} />
			</Switch>
		</BrowserRouter>
	);
};

export default MainComponent;
