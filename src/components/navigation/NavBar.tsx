import React from 'react';
import {ItemStyled, NavBarStyled} from "./NavBarStyled";
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <NavBarStyled>
            <ItemStyled>
                <NavLink to={"/profile"}>Profile</NavLink>
            </ItemStyled>
            <ItemStyled>
                <NavLink to={"/friends"}>Friends</NavLink>
            </ItemStyled>
            <ItemStyled>
                <NavLink to={"/dialogs"}>Dialogs</NavLink>
            </ItemStyled>
            <ItemStyled>
                <NavLink to={"/news"}>News</NavLink>
            </ItemStyled>
            <ItemStyled>
                <NavLink to={"/settings"}>Settings</NavLink>
            </ItemStyled>
        </NavBarStyled>
    );
};


