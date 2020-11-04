import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = (props: any) => {
    return (
        <div className={styles.wrapper}>
            <MyPosts />
        </div>
    )
};

export default Profile;
