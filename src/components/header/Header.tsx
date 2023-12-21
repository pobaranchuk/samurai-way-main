import React from 'react';
import {HeaderStyled, LoginBlockStyled} from "./HeaderStyled";
import {NavLink} from "react-router-dom";


type HeaderPropsType = {}
export const Header = (props: HeaderPropsType) => {
    return (
        <HeaderStyled>
            <img src={"https://seeklogo.com/images/P/pepsi-logo-94D7DEF922-seeklogo.com.png"} alt={"some"}/>
            <LoginBlockStyled>
                {props.isAuth ? props.login :
                    <NavLink to={"/login"}>Login</NavLink>
                }
            </LoginBlockStyled>
        </HeaderStyled>
    );
};