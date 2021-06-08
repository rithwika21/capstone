import React from 'react';
import { Route, useRouteMatch } from "react-router-dom";
import { CreationInfo } from "./creationinfo";
import { CreationForm } from "./creationform";
import {  ImageDefault } from "./imagedefault";

export const ImageManager = () => {
    let { path } = useRouteMatch();
    
    return (
        <div>
            <Route component={ImageDefault} path={path} exact />
            <Route component={CreationForm} path={`${path}/create`} />
            <Route component={CreationInfo} path={`${path}/view`} />
        </div>
    )
}
