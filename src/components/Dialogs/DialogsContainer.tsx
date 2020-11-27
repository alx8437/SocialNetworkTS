import React from 'react';
import {DialogsPage} from "../../redux/store";
import {addMessageAC, updateTextMessageAC} from "../../redux/dialogsReducer";
import {ActionTypes} from '../../redux/actionTypes';
import Dialogs from "./Dialogs";
import StoreContext from "../../redux/StoreContext";

/*type DialogsPropsType = {
    dialogsPage: DialogsPage
    dispatch: (action: ActionTypes) => void
}*/

const DialogsContainer = (/*props: DialogsPropsType*/) => {



    return <StoreContext.Consumer>
        { store => {

            const addMessage = () => {
                store.dispatch(addMessageAC())
            }

            const updateTextMessage = (newTextMessage: string) => {
                store.dispatch(updateTextMessageAC(newTextMessage))
            }

            return (<Dialogs
                dialogsPage={store.getState().dialogsPage}
                updateTextMessage={updateTextMessage}
                addMessage={addMessage}/>)
        }

        }
    </StoreContext.Consumer>
}

export default DialogsContainer;
