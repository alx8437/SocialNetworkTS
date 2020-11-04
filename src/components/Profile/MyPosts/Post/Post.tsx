import React from 'react';
import styles from './Post.module.css';
import avatar from '../../../../assets/images/userNoPhoto.png'

const Post = () => {
    return (
        <div>
            <div className={styles.item}>
                <img src={avatar} alt="avatar" />
                <div className={styles.messageWrapper}>Message</div>
            </div>
            <div>
                <span>like</span>
            </div>
        </div>
    )
};

export default Post;





