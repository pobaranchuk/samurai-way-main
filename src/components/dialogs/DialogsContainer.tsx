import {InitialDialogStateType, SendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/dialog-reducer";
import {AppRootStateType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    dialogsPage: InitialDialogStateType
}

type mapDispatchToPropsType = {
    updateNewMessageBody: (body: string) => void
    sendMessage: () => void
}

export type  DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppRootStateType): mapStateToPropsType => {
    return {
        dialogsPage: state.dialogsPage
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
// настраиваем коннект этими двумя функциями
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs) //вызываем функцию которую возращает коннект

export default DialogsContainer;