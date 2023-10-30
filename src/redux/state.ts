import {v1} from "uuid";

export const state = {
    profilePage: {
        posts: [
            {id: v1(), postbody: "Yo how are you", likesCount: 112},
            {id: v1(), postbody: "Yo how are you", likesCount: 13},
            {id: v1(), postbody: "Yo how are you", likesCount: 16},
            {id: v1(), postbody: "Yo how are you", likesCount: 19},
            {id: v1(), postbody: "Yo how are you", likesCount: 109},
            {id: v1(), postbody: "Yo how are you", likesCount: 199}
        ]
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
}