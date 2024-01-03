import {v1} from "uuid";
export const SendMessageCreator = (newMessageBody: string) => {
    return {
        type: "SEND-MESSAGE",
        newMessageBody
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
    ] as MessagesType[]
}

export type InitialDialogStateType = typeof initialState

type ActionsTypes = | ReturnType<typeof SendMessageCreator>

export const DialogReducer = (state: InitialDialogStateType = initialState, action: ActionsTypes): InitialDialogStateType => {

    switch (action.type) {
        case "SEND-MESSAGE":
            let body = action.newMessageBody
            return {
                ...state,
                messages: [...state.messages, {id: v1(), message: body}]
            }
        default:
            return state
    }
};