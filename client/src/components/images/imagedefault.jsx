import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export const ImageDefault = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <ul>
                <li>
                    <Link to={`${path}/view`} >View Images</Link>
                </li>
                <li>
                    <Link to={`${path}/create`} >Create Image</Link>
                </li>
            </ul>
        </div>
    )
}