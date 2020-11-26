import React from "react";
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import { ProfilePage} from "../../redux/store";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {ActionTypes} from "../../redux/actionTypes";

type PropsType = {
    profilePage: ProfilePage
    dispatch: (action: ActionTypes) => void
}

const Profile = (props: PropsType) => {
    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo />
            <MyPostsContainer
                profilePage={props.profilePage}
                dispatch={props.dispatch}
            />
        </div>
    )
};

export default Profile;
