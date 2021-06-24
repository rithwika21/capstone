import React from 'react';
import { Route, useRouteMatch } from "react-router-dom";
import { CreationInfo } from "./creationinfo";
import { ImageDefault } from "./imagedefault";
import CreateContainer from '../Imagemanager/dashboard';

export const ImageManager = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <Route component={ImageDefault} path={path} exact />
            <Route component={CreateContainer} path={`${path}/create`} />
            <Route component={CreationInfo} path={`${path}/view`} />
        </div>
    )
}
