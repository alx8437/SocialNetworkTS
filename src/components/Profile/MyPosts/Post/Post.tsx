import React from 'react';
import styles from './Post.module.css';
import avatar from '../../../../assets/images/defaultAvatar.png'
import { PostType } from '../../../../redux/rootStateTypes';


const Post = (props: PostType) => {
    return (
        <div>
            <div className={styles.item}>
                <img src={avatar} alt="avatar" />
                <div className={styles.messageWrapper}>{props.message}</div>
            </div>
            <div>
                <span>like {props.likesCount}</span>
            </div>
        </div>
    )
};

export default Post;





