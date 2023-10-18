import React from 'react';
import styled from "styled-components";
import {PostStyled} from "./PostStyled";
import {MiniAvatar} from "../../avatar/MiniAvatar";

type PostType = {
    postbody: string
}

export const Post = (props: PostType) => {
    return (
        <PostStyled>
            <MiniAvatar/>
            {props.postbody}
        </PostStyled>
    );
};