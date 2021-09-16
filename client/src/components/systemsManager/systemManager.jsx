import React from 'react';
import { Route, useRouteMatch } from "react-router-dom";
import { ViewRemotes } from "./viewRemotes";
import { AddRemotes } from "./addRemotes";
import { SystemsDefault } from "./systemsDefault";
import NavBar from "./../navbar";
export const SystemManager = () => {
    let { path } = useRouteMatch();
    
    return (
        <div>
            <NavBar />
            <Route component={SystemsDefault} path={path} exact />
            <Route component={ViewRemotes} path={`${path}/view`} />
            <Route component={AddRemotes} path={`${path}/add`} />
        </div>
    )
}
