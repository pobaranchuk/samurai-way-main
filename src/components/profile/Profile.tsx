import React from 'react';
import {ProfileStyled} from "./ProfileStyled";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {UserProfileType} from "../../redux/profile-reducer";

type ProfileType = {
    profile: UserProfileType
}

export const Profile = (props: ProfileType) => {

    return (
        <ProfileStyled>
            <ProfileInfo profileInfo ={ props.profile}/>
            <MyPostsContainer />
        </ProfileStyled>
    );
};

