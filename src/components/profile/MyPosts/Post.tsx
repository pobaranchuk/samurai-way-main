import React from 'react';
import {PostStyled} from "./PostStyled";
import {MiniAvatar} from "../../avatar/MiniAvatar";
import {Button} from "../../buttons/ButtonStyled";
import {PostType} from "../../../App";

type PostAAAType = {
    post:PostType
    removePost: (id: string)=> void
}

export const Post: React.FC<PostAAAType> = ({post, removePost}) => {

    const onClickRemovePostHandler = ()=>{
        removePost(post.id)
    }

    return (
        <PostStyled>
            <MiniAvatar/>
            <div>{post.postbody}</div>{post.likesCount}<div></div>
            <Button onClick={onClickRemovePostHandler}>Remove</Button>
        </PostStyled>
    );
};