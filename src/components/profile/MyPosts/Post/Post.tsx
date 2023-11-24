import React from 'react';
import {PostStyled} from "./PostStyled";
import {MiniAvatar} from "../../../avatar/MiniAvatar";

export type PostType = {
    id: string
    postbody: string
    likesCount: number
}

export const Post: React.FC<PostType> = ({id, postbody, likesCount}) => {

    return (
        <PostStyled>
            <MiniAvatar/>
            <div id={id}>{postbody}</div>{likesCount}<div></div>
        </PostStyled>
    );
};