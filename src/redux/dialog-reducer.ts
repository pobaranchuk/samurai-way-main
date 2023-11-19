import {v1} from "uuid";

export const UpdateNewMessageBodyCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-MESSAGE-BODY",
        body: newText
    } as const
}
export const SendMessageCreator = (newText: string) => {
    return {
        type: "SEND-MESSAGE",
        newText: newText
    } as const
}

let initialState = {
    dialogs: [
        {id: v1(), name: "Slava"},
        {id: v1(), name: "Andrey"},
        {id: v1(), name: "Sergey"},
        {id: v1(), name: "Asia"},
        {id: v1(), name: "Bohdan"},
        {id: v1(), name: "Max"}
    ],
    messages: [
        {id: v1(), message: "Yo how are you"},
        {id: v1(), message: "Yo how are you"},
        {id: v1(), message: "Yo how are you"},
        {id: v1(), message: "Yo how are you"},
        {id: v1(), message: "Yo how are you"},
        {id: v1(), message: "Yo how are you"}
    ],
    newMessageBody: ""
}

export const DialogReducer = (state = initialState, action) => {
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
            // Handle unknown action type
            return state
    }
};
