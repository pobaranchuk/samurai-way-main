import React from 'react';
import {DialogStyled} from "./DialogStyled";
import {MessagesStyled} from "./MessagesStyled";
import {MessageStyled} from "./Message";
import {NavLink} from "react-router-dom";
import {DialogsStyled, MenuDialogsStyled} from "./DialogsStyled";
import {DialogsPropsType} from "./DialogsContainer";
import {DialogsType, MessagesType} from "../../redux/dialog-reducer";
import {Field, reduxForm} from "redux-form";

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

    const addNewMessage = (values: any) => {
        props.sendMessage(values.newMessageBody)
    }

    return (
        <MenuDialogsStyled>
            <DialogsStyled>{dialogElement}</DialogsStyled>
            <MessagesStyled>
                {messagesElement}
                <AddMessageFormRedux onSubmit={addNewMessage}/>
            </MessagesStyled>

        </MenuDialogsStyled>
    )
}


const AddMessageForm = (props: any) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <Field component={"textarea"} name={"newMessageBody"} placeholder={"Enter your message "}/>
                <div>
                    <button>Send </button>
                </div>
            </form>
        </div>
    );
};

const AddMessageFormRedux = reduxForm({form: "dialogMessageForm"})(AddMessageForm)


export default Dialogs;
