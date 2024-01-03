import {InitialDialogStateType, SendMessageCreator} from "../../redux/dialog-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withRedirectRedirectHOC} from "../../hoc/WithAuthRedirect";
import React from "react";

type mapStateToPropsType = {
    dialogsPage: InitialDialogStateType
    isAuth: boolean
}

type mapDispatchToPropsType = {
    sendMessage: (newMessageBody: string) => void
}

export type  DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        sendMessage: (newMessageBody: string) => {
            dispatch(SendMessageCreator(newMessageBody))
        }
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    withRedirectRedirectHOC
)(Dialogs)