import React from 'react';
import {MiniAvatar} from "../../avatar/MiniAvatar";
import {ProfileInfoStyled} from "./ProfileInfoStyled";
import {UserProfileType} from "../../../redux/profile-reducer";
import Preloader from "../../common/preloader/Preloader";

type ProfileInfoType = {
    profileInfo: UserProfileType
}

export const ProfileInfo = (props: ProfileInfoType) => {
    if(!props.profileInfo){
        return <Preloader/>
    }
    return (
        <ProfileInfoStyled>
            <MiniAvatar/>
            <div>
                Avatar + description
                {props.profileInfo.fullName}
                {props.profileInfo.lookingForAJob}
                {props.profileInfo.lookingForAJobDescription}
            </div>
        </ProfileInfoStyled>
    );
};
