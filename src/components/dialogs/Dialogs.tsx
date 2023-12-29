import React, {ChangeEvent} from 'react';
import {DialogStyled} from "./DialogStyled";
import {MessagesStyled} from "./MessagesStyled";
import {MessageStyled} from "./Message";
import {NavLink} from "react-router-dom";
import {DialogsStyled, MenuDialogsStyled} from "./DialogsStyled";
import {InputStyled} from "../profile/ProfileStyled";
import {Button} from "../buttons/ButtonStyled";
import {DialogsPropsType} from "./DialogsContainer";
import {DialogsType, MessagesType} from "../../redux/dialog-reducer";
import { Navigate } from "react-router-dom";

export type DialogItemType = {
    dialog: DialogsType
}

export type MessageItemType = {
    message: MessagesType
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

const Dialogs: React.FC<DialogsPropsType> = (props: DialogsPropsType) => {

    const dialogElement = props.dialogsPage.dialogs.map(dialog => <DialogItem key={dialog.id} dialog={dialog}/>)
    const messagesElement = props.dialogsPage.messages.map(message => <MessageItem key={message.id} message={message}/>)

    const onSendMessageClick = () => {
        props.sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        let body = e.currentTarget.value
        props.updateNewMessageBody(body)
    }

    if(!props.isAuth) return <Navigate to={"/login"} replace={true}/>

    return (
        <MenuDialogsStyled>
            <DialogsStyled>{dialogElement}</DialogsStyled>
            <MessagesStyled>
                {messagesElement}
                <InputStyled value={props.dialogsPage.newMessageBody} onChange={onNewMessageChange}/>
                <Button onClick={onSendMessageClick}>Send Message</Button>
            </MessagesStyled>

        </MenuDialogsStyled>
    )
}

export default Dialogs;