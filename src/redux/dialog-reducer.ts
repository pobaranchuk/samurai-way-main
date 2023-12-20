import {v1} from "uuid";

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

export type DialogsType = {
    id: string;
    name: string;
}
export type MessagesType = {
    id: string;
    message: string;
}

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

export type InitialDialogStateType = typeof initialState

type ActionsTypes =
    | ReturnType<typeof UpdateNewMessageBodyCreator>
    | ReturnType<typeof SendMessageCreator>

export const DialogReducer = (state: InitialDialogStateType = initialState, action: ActionsTypes): InitialDialogStateType => {

    switch (action.type) {
        case "UPDATE-NEW-MESSAGE-BODY":
            return {
                ...state,
                newMessageBody: action.body
            }

        case "SEND-MESSAGE":
            let body = state.newMessageBody
            return {
                ...state,
                newMessageBody: "",
                messages: [...state.messages, {id: v1(), message: body}]
            }
        default:
            return state
    }
};