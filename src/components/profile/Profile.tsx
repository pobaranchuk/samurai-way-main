import React from 'react';
import {ProfileStyled} from "./ProfileStyled";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import Posts from "./MyPosts/Posts";
import {PostType} from "../../App";

type ProfileDataType = {
    posts: PostType[]
}

export const Profile: React.FC<ProfileDataType> = ({posts}) => {
    return (
        <ProfileStyled>
            <ProfileInfo/>
            <Posts postData={posts}/>
        </ProfileStyled>
    );
};

