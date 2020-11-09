import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {

    const postData =
        [
            {id: 1, message: "Hello, i like this course", likeCount: 15},
            {id: 2, message: "It's a nice course, yes!", likeCount: 20},
        ]


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
                <Post message={postData[0].message} likesCount={postData[0].id}/>
                <Post message={postData[1].message} likesCount={postData[1].id}/>
            </div>
        </div>
    )
};

export default MyPosts;
