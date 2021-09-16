import React from 'react';
import { Route, useRouteMatch } from "react-router-dom";
import { CreationInfo } from "./creationinfo";
import { ImageDefault } from "./imagedefault";
import {CreationForm_running} from "./creationform_running"
import CreateContainer from '../Imagemanager/dashboard';
import NavBar from "./../navbar";
export const ImageManager = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <NavBar />
            <Route component={ImageDefault} path={path} exact />
            <Route component={CreateContainer} path={`${path}/create`} />
            <Route component={CreationInfo} path={`${path}/view`} />
            <Route component={CreationForm_running} path={`${path}/images_running`} />
        </div>
    )
}
