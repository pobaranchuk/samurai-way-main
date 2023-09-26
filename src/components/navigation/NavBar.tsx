import React from 'react';
import {NavBarStyled} from "./NavBarStyled";

export const NavBar = () => {
    return (
        <NavBarStyled>
            <div>
                <a>Profile</a>
            </div>
            <div>
                <a>Messages</a>
            </div>
            <div>
                <a>News</a>
            </div>
            <div>
                <a>Music</a>
            </div>
            <div>
                <a>Settings</a>
            </div>
        </NavBarStyled>
    );
};