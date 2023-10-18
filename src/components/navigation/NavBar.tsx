import React from 'react';
import {ItemStyled, NavBarStyled} from "./NavBarStyled";
import {NavLink} from "react-router-dom";

export const NavBar = () => {
    return (
        <NavBarStyled>
            <ItemStyled>
                <NavLink to={"/Profile"}>Profile</NavLink>
            </ItemStyled>
            <ItemStyled>
                <NavLink to={"/Dialogs"}>Dialogs</NavLink>
            </ItemStyled>
            <ItemStyled>
                <NavLink to={"/News"}>News</NavLink>
            </ItemStyled>
            <ItemStyled>
                <NavLink to={"/Music"}>Music</NavLink>
            </ItemStyled>
            <ItemStyled>
                <NavLink to={"/Settings"}>Settings</NavLink>
            </ItemStyled>
        </NavBarStyled>
    );
};


