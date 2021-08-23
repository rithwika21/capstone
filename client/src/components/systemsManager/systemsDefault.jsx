import React from "react";
import { Button } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";

export const SystemsDefault = () => {
    let { path } = useRouteMatch();

    return (
        <div style={{ margin: "1rem 1rem" }}>
            <Button variant="contained" color="secondary">
                <Link to={`${path}/view`} style={{ textDecoration: "none", color: "#fff" }}>View Systems</Link>
            </Button>
            <Button variant="contained" color="secondary" style={{ marginLeft: "1rem" }}>
                <Link to={`${path}/add`} style={{ textDecoration: "none", color: "#fff", }}>Add Systems</Link>
            </Button>
        </div>
    )
}