import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import { useParams} from 'react-router-dom';

type mapStateToPropsType = {
    profile: UserProfileType
}

type mapDispatchToPropsType = {
    setUserProfile: (profile: UserProfileType) => void
}
const mapStateToProps = (state: AppRootStateType) => ({profile: state.profilePage.profile})

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType & {id?:string}


class ProfileContainer extends React.Component<ProfilePropsType, any> {
    componentDidMount() {
        let userId = this.props.id || "1"
        axios.get<UserProfileType>(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
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

export const withRouter = <T, >(Component: ComponentType<T>) => {
    return (props: T) => {
        const params = useParams<{ id: string }>()
        const {...restProps} = props
        return params ? <Component {...restProps as T} id={params.id}/> : <Component {...restProps as T & {}}/>
    }
}

const WithURLDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, {setUserProfile})(WithURLDataContainerComponent)

