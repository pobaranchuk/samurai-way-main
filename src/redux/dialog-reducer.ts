import {v1} from "uuid";
import {ActionsTypes} from "./store";

export const UpdateNewMessageBodyCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: newText
    } as const
}
export const SendMessageCreator = () => {
    return {
        type: "SEND-MESSAGE"
    } as const
}

type MessagesType = {
    id: string;
    message: string;
};
type DialogsType = {
    id: string;
    name: string;
};

let initialState = {
    dialogs: [
        {id: v1(), name: "Slava"},
        {id: v1(), name: "Andrey"},
        {id: v1(), name: "Sergey"},
        {id: v1(), name: "Asia"},
        {id: v1(), name: "Bohdan"},
        {id: v1(), name: "Max"}
    ] as DialogsType[],
    messages: [
        {id: v1(), message: "Yo how are you"},
        {id: v1(), message: "Yo how are you"},
        {id: v1(), message: "Yo how are you"},
        {id: v1(), message: "Yo how are you"},
        {id: v1(), message: "Yo how are you"},
        {id: v1(), message: "Yo how are you"}
    ] as MessagesType[],
    newMessageBody: ""
}

export type InitialStateType = typeof initialState

export const DialogReducer = (state: InitialStateType = initialState, action: ActionsTypes): InitialStateType => {
    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            state.newMessageBody = action.body;
            return state

        case "SEND-MESSAGE":
            let body = state.newMessageBody;
            state.newMessageBody = "";
            state.messages.push({id: v1(), message: body});
            return state

        default:
            return state
    }
};