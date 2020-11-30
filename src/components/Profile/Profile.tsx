import React from "react";
import styles from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (/*props: PropsType*/) => {
    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo />
            <MyPostsContainer />
        </div>
    )
};

export default Profile;
