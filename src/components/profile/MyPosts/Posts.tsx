import React from 'react';
import {Button} from "../../buttons/ButtonStyled";
import {Post} from "./Post";
import {InputNewsField} from "../ProfileStyled";
import {PostsStyled} from "./PostsStyled";

export const Posts = () => {

    let postData = [
        {id: 1, postbody: "Yo how are you", likesCount: 112},
        {id: 2, postbody: "Yo how are you", likesCount: 13},
        {id: 3, postbody: "Yo how are you", likesCount: 16},
        {id: 4, postbody: "Yo how are you", likesCount: 19},
        {id: 5, postbody: "Yo how are you", likesCount: 109},
        {id: 6, postbody: "Yo how are you", likesCount: 199}
    ]

    const postElement = postData.map(post => <Post key={post.id} postbody={post.postbody} likeCount={post.likesCount}/>)

    return (
        <PostsStyled>
            <InputNewsField/>
            <Button>Add post</Button>
            <Button>Remove</Button>
            {postElement}
        </PostsStyled>
    );
};

export default Posts;