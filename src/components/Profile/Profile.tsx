import React from "react";
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import {PostPropsType} from "../../redux/state";

type PropsType = {
    posts: Array<PostPropsType>
    addPost: (postText: string) => void
}

const Profile = (props: PropsType) => {
    return (
        <div className={styles.profileWrapper}>
            <ProfileInfo />
            <MyPosts  posts={props.posts} addPost={props.addPost}/>
        </div>
    )
};

export default Profile;
