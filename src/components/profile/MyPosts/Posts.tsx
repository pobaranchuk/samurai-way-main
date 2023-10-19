import React from 'react';
import {Button} from "../../buttons/ButtonStyled";
import {Post} from "./Post";
import {InputNewsField} from "../ProfileStyled";
import {PostsStyled} from "./PostsStyled";

export const Posts = () => {
    return (
        <PostsStyled>
            <InputNewsField/>
            <Button>Add post</Button>
            <Button>Remove</Button>
            <Post postbody={"My first post"}/>
            <Post postbody={"My second post"}/>
            <Post postbody={"My third post"}/>
        </PostsStyled>
    );
};

export default Posts;