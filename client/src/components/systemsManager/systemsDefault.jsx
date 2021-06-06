import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export const SystemsDefault = () => {
    let { path } = useRouteMatch();

    return (
        <div>
            <ul>
                <li>
                    <Link to={`${path}/add`} >Add Systems</Link>
                </li>
                <li>
                    <Link to={`${path}/view`} >View Systems</Link>
                </li>
            </ul>
        </div>
    )
}