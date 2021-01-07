import {addMessageAC, DialogsActionsType, updateTextMessageAC} from "../../redux/dialogs/dialogsActions";
import {DialogsStateType} from '../../redux/rootStateTypes';
import Dialogs, { DialogsPropsType } from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {Redirect} from "react-router-dom";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

type MapStatePropsType = {
    dialogsPage: DialogsStateType
}

type MapDispatchPropsType = {
    updateTextMessage: (newTextMessage: string) => void
    addMessage: () => void
}


const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: Dispatch<DialogsActionsType>): MapDispatchPropsType => {
    return {
        updateTextMessage: (newTextMessage: string) => {
            dispatch(updateTextMessageAC(newTextMessage))
        },
        addMessage: () => {
            dispatch(addMessageAC())
        }
    }
}

const withAuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>(mapStateToProps, mapDispatchToProps)(withAuthRedirectComponent)
export default DialogsContainer;
