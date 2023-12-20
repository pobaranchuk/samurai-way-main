import React from 'react';
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
            <div>
                <img src={props.profileInfo.photos.small} alt={"Avatar"}/>
            </div>
            <div>
                Avatar + description
                {props.profileInfo.fullName}
                {props.profileInfo.lookingForAJob}
                {props.profileInfo.lookingForAJobDescription}
            </div>
        </ProfileInfoStyled>
    );
};
