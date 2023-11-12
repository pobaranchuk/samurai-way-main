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

export const DialogReducer = (state, action) => {
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
