import React from 'react';
import {DialogStyled} from "./DialogStyled";
import {MessagesStyled} from "./MessagesStyled";
import {MessageStyled} from "./Message";
import {NavLink} from "react-router-dom";
import {DialogsStyled, MenuDialogsStyled} from "./DialogsStyled";
import {DialogType, MessageType} from "../../redux/state";

export type DialogItemType = {
    dialog: DialogType
}

export type MessageItemType = {
    message: MessageType
}

const DialogItem: React.FC<DialogItemType> = ({dialog}) => {
    return (
        <DialogStyled><NavLink to={"/dialogs/" + dialog.id}>{dialog.name}</NavLink></DialogStyled>
    )
}
const MessageItem: React.FC<MessageItemType> = ({message}) => {
    return (
        <MessageStyled key={message.id}>{message.message}</MessageStyled>
    )
}

type DialogsDataType = {
    dialogs: DialogType[]
    messages: MessageType[]
}

const Dialogs: React.FC <DialogsDataType> = ({dialogs, messages}) => {
    const dialogElement = dialogs.map(dialog => <DialogItem dialog={dialog}/>)
    const messagesElement = messages.map(message => <MessageItem message={message}/>)

    return (
        <MenuDialogsStyled>
            <DialogsStyled>{dialogElement}</DialogsStyled>
            <MessagesStyled>{messagesElement}</MessagesStyled>
        </MenuDialogsStyled>
    );
};

export default Dialogs;