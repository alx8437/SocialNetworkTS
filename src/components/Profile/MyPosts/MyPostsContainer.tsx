import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ProfileStateType} from "../../../redux/rootStateTypes";
import {StateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";
import {addPostAC, ProfileActionsType, updateTextPostAC } from "../../../redux/profile/profileReducer";

type MapStatePropsType = {
    profilePage: ProfileStateType
}

type MapDispatchPropsType = {
    addPost: () => void
    updateTextPost: (text: string) => void
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const mapDispatchToProps = (dispatch: Dispatch<ProfileActionsType>): MapDispatchPropsType => {
    return {
        addPost: () => {
            dispatch(addPostAC())
        },
        updateTextPost: (newTextPost: string) => {
            dispatch(updateTextPostAC(newTextPost))
        }
    }
}

const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
