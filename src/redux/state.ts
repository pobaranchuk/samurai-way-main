import {v1} from "uuid";
import {DataType} from "../App";

export let store = {
    _state : {
        profilePage: {
            posts: [
                {id: v1(), postbody: "Yo how are you", likesCount: 112},
                {id: v1(), postbody: "Yo how are you", likesCount: 13},
                {id: v1(), postbody: "Yo how are you", likesCount: 16},
                {id: v1(), postbody: "Yo how are you", likesCount: 19},
                {id: v1(), postbody: "Yo how are you", likesCount: 109},
                {id: v1(), postbody: "Yo how are you", likesCount: 199}
            ],
            newPostText: ""
        },
        dialogPage: {
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
            ]
        }
    },

    getState() {
        return this._state
    },

    addPost(){
        let newPost = {
            id: v1(),
            postbody: this._state.profilePage.newPostText,
            likesCount: 0
        }
        this._state.profilePage.posts.push(newPost)
        this._state.profilePage.newPostText = ""
        this._callSubscriber(this._state)
    },

    updateNewPostText(newText: string) {
        this._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state)
    },

    _callSubscriber(state: DataType) {
    },

    subscribe(observer: object){
        this._callSubscriber = observer
    }
}