import {InitialDialogStateType, SendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/dialog-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {compose, Dispatch} from "redux";
import {withRedirectRedirectHOC} from "../../hoc/WithAuthRedirect";

type mapStateToPropsType = {
    dialogsPage: InitialDialogStateType
    isAuth: boolean
}

type mapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
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
        sendMessage: () => {
            dispatch(SendMessageCreator())
        },
        updateNewMessageBody: (body: string) => {
            dispatch(UpdateNewMessageBodyCreator(body))
        }
    }
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withRedirectRedirectHOC
)(Dialogs)