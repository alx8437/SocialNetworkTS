import React from "react";
import {ProfilePage} from "../../../redux/store";
import {addPostAC, updateTextPostAC} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";
import {ActionTypes} from "../../../redux/actionTypes";
import StoreContext from "../../../redux/StoreContext";

/*type PropsType = {
    profilePage: ProfilePage
    dispatch: (action: ActionTypes) => void
}*/

const MyPostsContainer = (/*props: PropsType*/) => {


    return <StoreContext.Consumer>
        {store => {

            const addPost = () => {
                store.dispatch(addPostAC())
            }

            const updateTextPost = (newTextPost: string) => {
                store.dispatch(updateTextPostAC(newTextPost))
            }

           return (
               <MyPosts
                   profilePage={store.getState().profilePage}
                   addPost={addPost}
                   updateTextPost={updateTextPost}
               />
           )
        }
        }
    </StoreContext.Consumer>
};

export default MyPostsContainer;
