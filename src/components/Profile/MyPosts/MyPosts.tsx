import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props: any) => {
    return (
        <div className={styles.postWrapper}>
            <div className={styles.postBlock}>
                <div className={styles.textarea}>
                <textarea
                    className={styles.textarea}
                    placeholder={"Write what your wish"}
                />
                </div>
                <div>
                    <button className={styles.button}>AddPost</button>
                </div>
            </div>
            <div className={styles.posts}>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>

        </div>
    )
};

export default MyPosts;
