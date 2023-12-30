import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {ComponentType} from "react";
import {Navigate} from "react-router-dom";

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {isAuth: state.auth.isAuth}
}
export const withRedirectRedirectHOC = <T, >(Component: ComponentType<T>) => {
    const RedirectComponent = (props: mapStateToPropsType) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Navigate to={'/login'}/>
        }
        return <Component {...restProps as T}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}