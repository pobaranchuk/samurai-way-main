import React from 'react';
import {ProfileStyled} from "./ProfileStyled";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";
import {ProfilePropsType} from "./ProfileContainer";
import {Navigate} from "react-router-dom";

export const Profile = (props: Partial<ProfilePropsType>) => {
    return (
        <ProfileStyled>
            <ProfileInfo profileInfo={props.profile}/>
            <MyPostsContainer/>
        </ProfileStyled>
    );
};

