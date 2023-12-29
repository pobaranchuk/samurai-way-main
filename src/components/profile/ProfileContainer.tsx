import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Navigate, useParams} from 'react-router-dom';

type mapStateToPropsType = {
    profile: UserProfileType
    isAuth: boolean
}

type mapDispatchToPropsType = {
    getUserProfile: (userId: string) => void
}
const mapStateToProps = (state: AppRootStateType) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType & {id?:string}


class ProfileContainer extends React.Component<ProfilePropsType, any> {
    componentDidMount() {
        let userId = this.props.id || "1"
        this.props.getUserProfile(userId)
    }
    render() {
        if(!this.props.isAuth) return <Navigate to={"/login"} replace={true}/>
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

export default connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent)