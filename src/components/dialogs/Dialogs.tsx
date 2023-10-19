import React from 'react';
import {DialogsStyled} from "./DialogsStyled";
import {DialogsItemsStyled} from "./DialogsItemsStyled";
import {Dialog} from "./Dialog";
import {Messages} from "./Messages";
import {Message} from "./Message";

const Dialogs = () => {
    return (
        <DialogsStyled>
            <DialogsItemsStyled>
                <Dialog>Slava</Dialog>
                <Dialog>Andrey</Dialog>
                <Dialog>Sergey</Dialog>
                <Dialog>Asia</Dialog>
                <Dialog>Bohdan</Dialog>
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