import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {AddPostActionType, ProfilePage, UpdateTextPost} from "../../redux/store";

type PropsType = {
    profilePage: ProfilePage
    dispatch: (action: AddPostActionType | UpdateTextPost) => void
}

const Profile = (props: PropsType) => {
    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo />
            <MyPosts
                profilePage={props.profilePage}
                dispatch={props.dispatch}
            />
        </div>
    )
};

export default Profile;
