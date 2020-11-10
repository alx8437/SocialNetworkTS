import React from "react";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";


const MyPosts = () => {

    const postData =
        [
            {id: 1, message: "Hello, i like this course", likeCount: 15},
            {id: 2, message: "It's a nice course, yes!", likeCount: 20},
            {id: 3, message: "Hi!", likeCount: 2},
        ]

    const postsElements = postData.map(p => <Post key={p.id} message={p.message} likesCount={p.likeCount}/>)


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
                {postsElements}
            </div>
        </div>
    )
};

export default MyPosts;
