import React from 'react';
import {SendMessageCreator, UpdateNewMessageBodyCreator} from "../../redux/dialog-reducer";
import {StoreType} from "../../redux/redux-store";
import Dialogs from "./Dialogs";
import StoreContext from "../../StoreContext";

type DialogsDataType = {
    store: StoreType
}

const DialogsContainer: React.FC<DialogsDataType> = ({store}) => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState().dialogPage

                const onMessageBodyChangeHandler = (body: string) => {
                    store.dispatch(UpdateNewMessageBodyCreator(body))
                }
                const addMessageHandler = () => {
                    store.dispatch(SendMessageCreator(state.newMessageBody))
                }
                return <Dialogs
                    updateNewMessageBody={onMessageBodyChangeHandler}
                    sendMessage={addMessageHandler}
                    dialogPage={store.getState().dialogPage}/>
            }
        }
    </StoreContext.Consumer>
}

export default DialogsContainer;