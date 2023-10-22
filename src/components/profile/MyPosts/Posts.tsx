import React from 'react';
import {Button} from "../../buttons/ButtonStyled";
import {Post} from "./Post";
import {InputNewsField} from "../ProfileStyled";
import {PostsStyled} from "./PostsStyled";

export const Posts = () => {

    let postData = [
        {id: 1, postbody: "Yo how are you", likesCount: 12},
        {id: 2, postbody: "Yo how are you", likesCount: 12},
        {id: 3, postbody: "Yo how are you", likesCount: 12},
        {id: 4, postbody: "Yo how are you", likesCount: 12},
        {id: 5, postbody: "Yo how are you", likesCount: 12},
        {id: 6, postbody: "Yo how are you", likesCount: 12}
    ]

    return (
        <PostsStyled>
            <InputNewsField/>
            <Button>Add post</Button>
            <Button>Remove</Button>
            <Post postbody={"My first post"} likeCount={11}/>
            <Post postbody={"My second post"} likeCount={14}/>
            <Post postbody={"My third post"} likeCount={155}/>
        </PostsStyled>
    );
};

export default Posts;