import React from 'react';
import {Header} from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {initialAuthSateType, setAuthUserData} from "../../redux/auth-reducer";
import {setToggleIsFetching} from "../../redux/users-reducer";

type mapStateToPropsType = {
    isAuth: boolean
    login: string
}

type mapDispatchToPropsType = {
    setAuthUserData: (userId: number, email: string, login: string) => void
    setToggleIsFetching: (isFetching: boolean) => void
}
export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType

export class HeaderContainer extends React.Component<HeaderPropsType, any> {

    componentDidMount() {
        this.props.setToggleIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`,
            {withCredentials: true})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id, login, email} = response.data.data
                    this.props.setAuthUserData(id, email, login)
                }
            })
    }

    render() {
        return <Header {...this.props}/>;
    }
}

const mapStateToProps = (state: initialAuthSateType) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, {setAuthUserData, setToggleIsFetching})(HeaderContainer);