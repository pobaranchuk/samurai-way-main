import React from 'react';
import {ItemStyled, NavBarStyled} from "./NavBarStyled";

export const NavBar = () => {
    return (
        <NavBarStyled>
            <ItemStyled>
                <a>Profile</a>
            </ItemStyled>
            <ItemStyled>
                <a>Messages</a>
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


