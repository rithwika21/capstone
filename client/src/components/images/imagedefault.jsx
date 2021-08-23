import { Button } from "@material-ui/core";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export const ImageDefault = () => {
    let { path } = useRouteMatch();

    return (
        <div style={{ margin: "1rem 1rem" }}>
            <Button variant="contained" color="secondary">
                <Link to={`${path}/view`} style={{ textDecoration: "none", color: "#fff" }}>View Images</Link>
            </Button>
            <Button variant="contained" color="secondary" style={{ marginLeft: "1rem" }}>
                <Link to={`${path}/create`} style={{ textDecoration: "none", color: "#fff", }}>Create Image</Link>
            </Button>
        </div>
    )
}