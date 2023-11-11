import React from 'react';
import { NavBarStyled} from "./NavBarStyled";
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <NavBarStyled>
            <li><button><NavLink to={"/profile"}>Profile</NavLink></button></li>
            <li><button><NavLink to={"/friends"}>Friends</NavLink></button></li>
            <li><button><NavLink to={"/dialogs"}>Dialogs</NavLink></button></li>
            <li><button><NavLink to={"/news"}>News</NavLink></button></li>
            <li><button><NavLink to={"/settings"}>Settings</NavLink></button></li>
        </NavBarStyled>
    );
};