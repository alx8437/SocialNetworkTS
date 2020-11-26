import React from "react";
import {ProfilePage} from "../../../redux/store";
import {addPostAC, updateTextPostAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {ActionTypes} from "../../../redux/actionTypes";

type PropsType = {
    profilePage: ProfilePage
    dispatch: (action: ActionTypes) => void
}

const MyPostsContainer = (props: PropsType) => {

    const addPost = () => {
            props.dispatch(addPostAC())
    }

    const updateTextPost = (newTextPost: string) => {
        props.dispatch(updateTextPostAC(newTextPost))
    }

    return <MyPosts profilePage={props.profilePage} addPost={addPost} updateTextPost={updateTextPost}/>
};

export default MyPostsContainer;
