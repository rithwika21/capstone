import React from 'react';
import { Route, useRouteMatch } from "react-router-dom";
import { viewRemotes } from "./viewRemotes";
import { AddRemotes } from "./addRemotes";
import { SystemsDefault } from "./systemsDefault";

export const SystemManager = () => {
    let { path } = useRouteMatch();
    
    return (
        <div>
            <Route component={SystemsDefault} path={path} exact />
            <Route component={viewRemotes} path={`${path}/view`} />
            <Route component={AddRemotes} path={`${path}/add`} />
        </div>
    )
}
