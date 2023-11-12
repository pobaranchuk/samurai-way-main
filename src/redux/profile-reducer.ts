import {v1} from "uuid";

export const AddPostActionCreator = (newPostText: string) => {
    return {
        type: "ADD-POST",
        newPostText: newPostText
    } as const
}
export const ChangeNewTextActionCreator = (newText: string) => {
    return {
        type: "UPDATE-NEW-POST-TEXT",
        newText: newText
    } as const
}


export const ProfileReducer = (state, action) => {
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