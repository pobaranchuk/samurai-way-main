import React from 'react';
import {DialogStyled} from "./DialogStyled";
import {MessagesStyled} from "./MessagesStyled";
import {MessageStyled} from "./Message";
import {NavLink} from "react-router-dom";
import {DialogsStyled, MenuDialogsStyled} from "./DialogsStyled";

export type DialogItemPropsType = {
    id: number
    name: string
}

export type MessageItemPropsType = {
    id?: number
    message: string
}
const DialogItem: React.FC<DialogItemPropsType> = ({name, id}) => {
    return (
        <DialogStyled><NavLink to={"/dialogs/" + id}>{name}</NavLink></DialogStyled>
    )
}

const MessageItem: React.FC<MessageItemPropsType> = ({id, message}) => {
    return (
        <MessageStyled key={id}>{message}</MessageStyled>
    )
}

const Dialogs = () => {

    let dialogData = [
        {id: 1, name: "Slava"},
        {id: 2, name: "Andrey"},
        {id: 3, name: "Sergey"},
        {id: 4, name: "Asia"},
        {id: 5, name: "Bohdan"},
        {id: 6, name: "Max"}
    ]
    let messageData = [
        {id: 1, message: "Yo how are you"},
        {id: 2, message: "Yo how are you"},
        {id: 3, message: "Yo how are you"},
        {id: 4, message: "Yo how are you"},
        {id: 5, message: "Yo how are you"},
        {id: 6, message: "Yo how are you"}
    ]

    const dialogElement = dialogData.map(dialog => <DialogItem id={dialog.id} name={dialog.name}/>)
    
    const messagesElement = messageData.map(message => <MessageItem key={message.id} message={message.message}/>)

    return (
        <MenuDialogsStyled>
            <DialogsStyled>{dialogElement}</DialogsStyled>
            <MessagesStyled>{messagesElement}</MessagesStyled>
        </MenuDialogsStyled>
    );
};

export default Dialogs;