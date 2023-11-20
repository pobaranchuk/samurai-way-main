import React from 'react';
import {ProfileStyled} from "./ProfileStyled";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
import {ActionsTypes, ProfilePageType} from "../../redux/store";
import {StoreType} from "../../redux/redux-store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

type ProfileDataType = {
    store: StoreType
}

export const Profile: React.FC<ProfileDataType> = ({store}) => {

    return (
        <ProfileStyled>
            <ProfileInfo/>
            <MyPostsContainer/>
        </ProfileStyled>
    );
};

