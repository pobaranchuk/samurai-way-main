import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {getAuthUserData} from "../../redux/auth-reducer";
import {setToggleIsFetching} from "../../redux/users-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    isAuth: boolean
    login: string
}

type mapDispatchToPropsType = {
    getAuthUserData: () => (dispatch: Dispatch) => void
    setToggleIsFetching: (isFetching: boolean) => void
}
export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType

export class HeaderContainer extends React.Component<HeaderPropsType, any> {
    componentDidMount() {
        this.props.setToggleIsFetching(true)
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: AppRootStateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {getAuthUserData, setToggleIsFetching})(HeaderContainer);