import React, {ComponentType} from 'react';
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {getUserProfile, UserProfileType} from "../../redux/profile-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {useParams} from "react-router-dom";
import {withRedirectHOC} from "../../hoc/WithAuthRedirect";

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

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType & { id?: string }


class ProfileContainer extends React.Component<ProfilePropsType, any> {
    componentDidMount() {
        let userId = this.props.id || "2"
        this.props.getUserProfile(userId)
    }

    render() {
        return (
            <Profile profile={this.props.profile}/>
        )
    }
}

const AuthRedirectComponent = withRedirectHOC(ProfileContainer)

export const withRouter = <T, >(Component: ComponentType<T>) => {
    return (props: T) => {
        const params = useParams<{ id: string }>()
        const {...restProps} = props
        return params ? <Component {...restProps as T} id={params.id}/> : <Component {...restProps as T & {}}/>
    }
}

const WithURLDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {getUserProfile})(WithURLDataContainerComponent)