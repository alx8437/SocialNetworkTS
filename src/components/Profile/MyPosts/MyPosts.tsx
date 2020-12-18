import React, {ChangeEvent} from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {ProfileReducerType} from "../../../redux/stateTypes";

type PropsType = {
    profilePage: ProfileReducerType
    addPost: () => void
    updateTextPost: (text: string) => void
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
        const newTextPost = e.currentTarget.value
        props.updateTextPost(newTextPost)
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
