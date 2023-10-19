import React from 'react';
import {DialogsStyled} from "./DialogsStyled";
import {DialogsItemsStyled} from "./DialogsItemsStyled";
import {Dialog} from "./Dialog";
import {Messages} from "./Messages";
import {Message} from "./Message";
import {NavLink} from "react-router-dom";

const Dialogs = () => {
    return (
        <DialogsStyled>
            <DialogsItemsStyled>
                <Dialog><NavLink to={"/dialogs/1"}>Slava</NavLink></Dialog>
                <Dialog><NavLink to={"/dialogs/2"}>Andrey</NavLink></Dialog>
                <Dialog><NavLink to={"/dialogs/3"}>Sergey</NavLink></Dialog>
                <Dialog><NavLink to={"/dialogs/4"}>Asia</NavLink></Dialog>
                <Dialog><NavLink to={"/dialogs/5"}>Bohdan</NavLink></Dialog>
            </DialogsItemsStyled>

            <Messages>
                <Message>Slava, Yo how are you</Message>
                <Message>Andre, Yo how are you</Message>
                <Message>Sergey, Yo how are you</Message>
                <Message>Asia, Yo how are you</Message>
                <Message>Bogdan, Yo how are you </Message>
            </Messages>
        </DialogsStyled>
    );
};

export default Dialogs;