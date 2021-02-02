import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {ProfileStateType} from "../../../redux/rootStateTypes";
import {RootStateType} from "../../../redux/redux-store";
import {addPostAC} from "../../../redux/profile/profileReducer";

type MapStatePropsType = {
    profilePage: ProfileStateType
}

type MapDispatchPropsType = {
    addPostAC: (newPostMessage: string) => void
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        profilePage: state.profilePage
    }
}

const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(mapStateToProps, {addPostAC})(MyPosts)
export default MyPostsContainer;
