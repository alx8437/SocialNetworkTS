import React from "react";
import { PostPropsType } from "../../../redux/state";
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

type PropsType = {
    posts: Array<PostPropsType>
    addPost: (postText: string) => void
}

const MyPosts = (props: PropsType) => {

    const postsElements = props.posts.map(p => <Post key={p.id} id={p.id} message={p.message} likesCount={p.likesCount}/>)
    const newTextPost = React.createRef<HTMLTextAreaElement>();

    const addPost = () => {
        const postText = newTextPost.current?.value
        if (postText) {
            console.log(props.posts)
            props.addPost(postText)
            console.log(props.posts)
        }
    }

    return (
        <div className={styles.postWrapper}>
            <div className={styles.postBlock}>
                <div className={styles.textarea}>
                <textarea
                    className={styles.textarea}
                    placeholder={"Write what your wish"}
                    ref={newTextPost}
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
