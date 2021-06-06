import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/createImage">Create Image</Link>
                </li>
                <li>
                    <Link to="/systems">Systems Manager</Link>
                </li>
            </ul>
        </div>
    )
}