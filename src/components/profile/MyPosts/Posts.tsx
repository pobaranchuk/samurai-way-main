import React from 'react';
import {Button} from "../../buttons/ButtonStyled";
import {Post} from "./Post";
import {InputNewsField} from "../ProfileStyled";
import {PostsStyled} from "./PostsStyled";
import {PostType} from "../../../App";

type PostDataType = {
    postData: PostType[]
}
export const Posts: React.FC <PostDataType> = ({postData}) => {
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