import React from "react";
import styles from './ProfileInfo.module.css';


const ProfileInfo = () => {

    return (
        <div>
            <div className={styles.content}>
                Profile

                <div className={styles.otherResources}>
                    <div>vk</div>
                    <div>Full name</div>
                    <div>about</div>
                </div>
            </div>
        </div>
    )
};

export default ProfileInfo;
