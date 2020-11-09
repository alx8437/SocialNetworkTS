import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props: any) => {
    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo />
            <MyPosts />
        </div>
    )
};

export default Profile;
