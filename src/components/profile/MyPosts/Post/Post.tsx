import React from 'react';
import {PostStyled} from "./PostStyled";
import avatar from "../../../avatar/avatar.png";

export type PostType = {
    id: string
    postbody: string
    likesCount: number
}

export const Post: React.FC<PostType> = ({id, postbody, likesCount}) => {

    return (
        <PostStyled>
            <div>
                <img src={avatar} alt={"Avatar"}/>
            </div>
            <div id={id}>{postbody}</div>
            {likesCount}
            <div></div>
        </PostStyled>
    );
};