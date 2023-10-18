import React from 'react';
import {ItemStyled, NavBarStyled} from "./NavBarStyled";

export const NavBar = () => {
    return (
        <NavBarStyled>
            <ItemStyled>
                <a href={"/Profile"}>Profile</a>
            </ItemStyled>
            <ItemStyled>
                <a href={"/Dialogs"}>Dialogs</a>
            </ItemStyled>
            <ItemStyled>
                <a>News</a>
            </ItemStyled>
            <ItemStyled>
                <a>Music</a>
            </ItemStyled>
            <ItemStyled>
                <a>Settings</a>
            </ItemStyled>
        </NavBarStyled>
    );
};


