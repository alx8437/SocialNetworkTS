import {DialogsStateType} from '../../redux/rootStateTypes';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {RootStateType} from "../../redux/store";
import {compose} from "redux";
import React from "react";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {addMessageAC} from "../../redux/dialogs/dialogsReducer";

type MapStatePropsType = {
    dialogsPage: DialogsStateType
}

type MapDispatchPropsType = {
    addMessageAC: (newTextMessage: string) => void
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        dialogsPage: state.dialogsPage,
    }
}

export default compose(
    connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, {addMessageAC}),
    withAuthRedirect,
)(Dialogs) as React.ComponentType;

