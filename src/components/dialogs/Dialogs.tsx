import React, {ChangeEvent} from 'react';
import {DialogStyled} from "./DialogStyled";
import {MessagesStyled} from "./MessagesStyled";
import {MessageStyled} from "./Message";
import {NavLink} from "react-router-dom";
import {DialogsStyled, MenuDialogsStyled} from "./DialogsStyled";
import {
    ActionsTypes,
    DialogPageType,
    DialogType,
    MessageType,
    SendMessageCreator,
    UpdateNewMessageBodyCreator
} from "../../redux/state";
import {InputStyled} from "../profile/ProfileStyled";
import {Button} from "../buttons/ButtonStyled";

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
    dispatch: (action: ActionsTypes) => void
    dialogPage: DialogPageType

}

const Dialogs: React.FC<DialogsDataType> = ({dialogPage, dispatch}) => {
    const dialogElement = dialogPage.dialogs.map(dialog => <DialogItem dialog={dialog}/>)
    const messagesElement = dialogPage.messages.map(message => <MessageItem message={message}/>)

    const onMessageBodyChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let body = e.currentTarget.value
        dispatch(UpdateNewMessageBodyCreator(body))
    }
    const addMessageHandler = () => {
        dispatch(SendMessageCreator(dialogPage.newMessageBody))
    }

    return (
        <MenuDialogsStyled>
            <DialogsStyled>{dialogElement}</DialogsStyled>
            <MessagesStyled>
                {messagesElement}
                <InputStyled value={dialogPage.newMessageBody} onChange={onMessageBodyChangeHandler}/>
                <Button onClick={addMessageHandler}>Send Message</Button>
            </MessagesStyled>

        </MenuDialogsStyled>
    );
};

export default Dialogs;