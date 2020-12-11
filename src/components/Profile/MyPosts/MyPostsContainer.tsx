import {addPostAC, updateTextPostAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ACTypes, ProfilePageType} from "../../../redux/types";
import {StateType} from "../../../redux/redux-store";
import {Dispatch} from "redux";

type MapStatePropsType = {
    profilePage: ProfilePageType
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

const mapDispatchToProps = (dispatch: Dispatch<ACTypes>): MapDispatchPropsType => {
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
