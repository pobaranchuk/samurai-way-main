import React from 'react';
import {InputNewsField, ProfileStyled} from "./ProfileStyled";
import {Post} from "./MyPosts/Post";
import {Button} from "../buttons/ButtonStyled";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import Posts from "./MyPosts/Posts";

export const Profile = () => {
    return (
        <ProfileStyled>
            <ProfileInfo/>
            <Posts/>
        </ProfileStyled>
    );
};

