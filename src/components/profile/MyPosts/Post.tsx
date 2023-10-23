import React from 'react';
import styled from "styled-components";
import {PostStyled} from "./PostStyled";
import {MiniAvatar} from "../../avatar/MiniAvatar";

type PostType = {
    postbody: string
    likeCount: number
}

export const Post: React.FC<PostType> = ({postbody, likeCount}) => {

    return (
        <PostStyled>
            <MiniAvatar/>
            <div>{postbody}</div>{likeCount}<div></div>
        </PostStyled>
    );
};