import {InitialDialogStateType, SendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/dialog-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {withRedirectHOC} from "../../hoc/WithAuthRedirect";

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
        updateNewMessageBody: (body: string) => {
            dispatch(UpdateNewMessageBodyCreator(body))
        },
        sendMessage: () => {
            dispatch(SendMessageCreator())
        }
    }
}

const AuthRedirectComponent = withRedirectHOC<DialogsPropsType>(Dialogs)

// настраиваем коннект этими двумя функциями
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent) //вызываем функцию которую возращает коннект

export default DialogsContainer;