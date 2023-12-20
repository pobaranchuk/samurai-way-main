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

const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, sendMessage, updateNewMessageBody}) => {

    let state = dialogsPage

    const dialogElement = state.dialogs.map(dialog => <DialogItem key={dialog.id} dialog={dialog}/>)
    const messagesElement = state.messages.map(message => <MessageItem key={message.id} message={message}/>)

    const onSendMessageClick = () => {
        sendMessage()
    }

    const onNewMessageChange = (e: ChangeEvent<HTMLInputElement>) => {
        let body = e.currentTarget.value
        updateNewMessageBody(body)
    }

    return (
        <MenuDialogsStyled>
            <DialogsStyled>{dialogElement}</DialogsStyled>
            <MessagesStyled>
                {messagesElement}
                <InputStyled value={state.newMessageBody} onChange={onNewMessageChange}/>
                <Button onClick={onSendMessageClick}>Send Message</Button>
            </MessagesStyled>

        </MenuDialogsStyled>
    );
};

export default Dialogs;