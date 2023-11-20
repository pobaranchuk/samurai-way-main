import React, {ChangeEvent} from 'react';
import {DialogStyled} from "./DialogStyled";
import {MessagesStyled} from "./MessagesStyled";
import {MessageStyled} from "./Message";
import {NavLink} from "react-router-dom";
import {DialogsStyled, MenuDialogsStyled} from "./DialogsStyled";
import {
    DialogType,
    MessageType
} from "../../redux/store";
import {InputStyled} from "../profile/ProfileStyled";
import {Button} from "../buttons/ButtonStyled";
import {DialogsPropsType} from "./DialogsContainer";

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

const Dialogs: React.FC<DialogsPropsType> = ({dialogsPage, sendMessage, updateNewMessageBody}) => {

    let state = dialogsPage

    const dialogElement = state.dialogs.map(dialog => <DialogItem dialog={dialog}/>)
    const messagesElement = state.messages.map(message => <MessageItem message={message}/>)

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