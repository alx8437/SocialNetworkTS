import React, {ChangeEvent} from "react";
import {ProfilePage} from "../../../redux/store";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

type PropsType = {
    profilePage: ProfilePage
    addPost: () => void
    updateTextPost: (newTextPost: string) => void
}

const MyPosts = (props: PropsType) => {

    const postsElements = props.profilePage.posts.map(p => <Post
        key={p.id}
        id={p.id}
        message={p.message}
        likesCount={p.likesCount}
    />)

    const addPost = () => {
            props.addPost()
    }

    const updateTextPost = (e: ChangeEvent<HTMLTextAreaElement>) => {
        props.updateTextPost(e.currentTarget.value)
    }



    return (
        <div className={styles.postWrapper}>
            <div className={styles.postBlock}>
                <div className={styles.textarea}>
                <textarea
                    className={styles.textarea}
                    value={props.profilePage.newPostText}
                    onChange={updateTextPost}
                />
                </div>
                <div>
                    <button className={styles.button} onClick={addPost}>AddPost</button>
                </div>
            </div>
            <div className={styles.posts}>
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;
