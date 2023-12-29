import {connect} from "react-redux";
import {AppRootStateType} from "../redux/redux-store";
import {ComponentType} from "react";
import {Navigate} from "react-router-dom";


const mapStateToProps = (state: AppRootStateType) => {
    return {isAuth: state.auth.isAuth}
}
export const withRedirectHOC = <T, >(Component: ComponentType<T>) => {
    const RedirectComponent = (props: { isAuth: boolean }) => {
        const {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Navigate to={'/login'}/>
        }
        return <Component {...restProps as T & {}}/>
    }
    return connect(mapStateToProps)(RedirectComponent)
}