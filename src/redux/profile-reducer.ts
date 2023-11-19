import {v1} from "uuid";

export const AddPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    } as const
}
export const UpdateNewTextActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}

let initialState = {
    posts: [
        {id: v1(), postbody: "Yo how are you", likesCount: 112},
        {id: v1(), postbody: "Yo how are you", likesCount: 13},
        {id: v1(), postbody: "Yo how are you", likesCount: 16},
        {id: v1(), postbody: "Yo how are you", likesCount: 19},
        {id: v1(), postbody: "Yo how are you", likesCount: 109},
        {id: v1(), postbody: "Yo how are you", likesCount: 199}
    ],
    newPostText: ""
}

export const ProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD-POST":
            state.posts.push({id: v1(), postbody: state.newPostText, likesCount: 0});
            state.newPostText = "";
            return state

        case "UPDATE-NEW-POST-TEXT":
            state.newPostText = action.newText;
            return state

        default:
            // Handle unknown action type
            return state
    }
};