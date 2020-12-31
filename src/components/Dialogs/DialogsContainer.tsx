import {addMessageAC, DialogsActionsType, updateTextMessageAC} from "../../redux/dialogs/dialogsActions";
import {DialogsStateType} from '../../redux/rootStateTypes';
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {StateType} from "../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    dialogsPage: DialogsStateType
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


const DialogsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;
