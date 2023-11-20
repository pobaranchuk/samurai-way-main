import React from 'react';
import {ProfileStyled} from "./ProfileStyled";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

export const Profile = () => {

    return (
        <ProfileStyled>
            <ProfileInfo/>
            <MyPostsContainer/>
        </ProfileStyled>
    );
};

