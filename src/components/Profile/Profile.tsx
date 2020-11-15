import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {ProfilePage} from "../../redux/state";

type PropsType = {
    profilePage: ProfilePage
    addPost: () => void
    updateTextPost: (newTextPost: string) => void
}

const Profile = (props: PropsType) => {
    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo />
            <MyPosts
                profilePage={props.profilePage}
                addPost={props.addPost}
                updateTextPost={props.updateTextPost}
            />
        </div>
    )
};

export default Profile;
