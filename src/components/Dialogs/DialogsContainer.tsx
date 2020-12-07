import React from 'react';
import {addMessageAC, updateTextMessageAC} from "../../redux/dialogsReducer";
import {ACTypes, DialogsPageType} from '../../redux/types';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogsPage: DialogsPageType
}

type MapDispatchPropsType = {
    updateTextMessage: (newTextMessage: string) => void
    addMessage: () => void
}


const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage
    }
}
const mapDispatchToProps = (dispatch: Dispatch<ACTypes>): MapDispatchPropsType => {
    return {
        updateTextMessage: (newTextMessage: string) => {
            dispatch(updateTextMessageAC(newTextMessage))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}


const DialogsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;
