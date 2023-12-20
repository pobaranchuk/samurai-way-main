import React from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";

type mapStateToPropsType = {
    profile: UserProfileType
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}

const mapStateToProps = (state: AppRootStateType) => ({profile: state.profilePage.profile})

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType


class ProfileContainer extends React.Component<ProfilePropsType, any> {
    componentDidMount() {
        axios.get<UserProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUserProfile(response.data)
            })
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

export default connect(mapStateToProps, {setUserProfile})(ProfileContainer)

