import React from 'react';
import {DialogsStyled} from "./DialogsStyled";
import {DialogsItemsStyled} from "./DialogsItemsStyled";
import {Dialog} from "./Dialog";
import {Messages} from "./Messages";
import {MessageStyled} from "./Message";
import {NavLink} from "react-router-dom";

export type DialogItemPropsType = {
    id: string
    name: string
}

export type MessageItemPropsType = {
    name: string
    message: string
}
const DialogItem: React.FC<DialogItemPropsType> = ({name, id}) => {
    return (
        <Dialog><NavLink to={"/dialogs/" + id}>{name}</NavLink></Dialog>
    )
}

const MessageItem: React.FC<MessageItemPropsType> = ({name, message}) => {
    return (
        <MessageStyled>{name}, {message}</MessageStyled>
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

    return (
        <DialogsStyled>
            <DialogsItemsStyled>
                <DialogItem id={"1"} name={"Slava"}/>
                <DialogItem id={"2"} name={"Andrey"}/>
                <DialogItem id={"3"} name={"Sergey"}/>
                <DialogItem id={"4"} name={"Asia"}/>
                <DialogItem id={"5"} name={"Bohdan"}/>
                <DialogItem id={"6"} name={"Max"}/>
            </DialogsItemsStyled>

            <Messages>
                <MessageItem name={"Slava"} message={"Yo how are you"}/>
                <MessageItem name={"Andre"} message={"Yo how are you"}/>
                <MessageItem name={"Sergey"} message={"Yo how are you"}/>
                <MessageItem name={"Asia"} message={"Yo how are you"}/>
                <MessageItem name={"Bogdan"} message={"Yo how are you"}/>
                <MessageItem name={"Max"} message={"Yo how are you"}/>
            </Messages>
        </DialogsStyled>
    );
};

export default Dialogs;