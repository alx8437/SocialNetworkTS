import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ProfileStateType} from "../../../redux/rootStateTypes";
import {StateType} from "../../../redux/redux-store";
import {addPostAC} from "../../../redux/profile/profileReducer";

type MapStatePropsType = {
    profilePage: ProfileStateType
}

type MapDispatchPropsType = {
    addPostAC: (newPostMessage: string) => void
}

const mapStateToProps = (state: StateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, StateType>(mapStateToProps, {addPostAC})(MyPosts)
export default MyPostsContainer;
