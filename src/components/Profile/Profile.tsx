import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "./MyPosts/Post/Post";

type PropsType = {
    posts: Array<PostPropsType>
}

const Profile = (props: PropsType) => {
    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo />
            <MyPosts  posts={props.posts}/>
        </div>
    )
};

export default Profile;
