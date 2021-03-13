import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {PostPropsType} from "../../../redux/rootStateTypes";
import {RootStateType} from "../../../redux/store";
import {addPostAC} from "../../../redux/profile/profileReducer";

type MapStatePropsType = {
    posts: Array<PostPropsType>
}

type MapDispatchPropsType = {
    addPostAC: (newPostMessage: string) => void
}

const mapStateToProps = (state: RootStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts
    }
}

const MyPostsContainer = connect<MapStatePropsType, MapDispatchPropsType, {}, RootStateType>(
    mapStateToProps, {addPostAC})(MyPosts)
export default MyPostsContainer;
