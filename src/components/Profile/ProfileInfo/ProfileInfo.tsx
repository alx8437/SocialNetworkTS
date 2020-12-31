import React from "react";
import styles from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/rootStateTypes";
import defaultAvatar from "../../../assets/images/defaultAvatar.png";

type ProfileInfoPropsType = {
    profile: ProfileType,
}


const ProfileInfo = (props: ProfileInfoPropsType) => {

    const photo = props.profile.photos.small ? props.profile.photos.small : defaultAvatar;

    return (
        <div>
            <div className={styles.content}>
                <div>
                    <img
                        className={styles.avatar}
                        src={photo}
                        alt="avatar"/>
                </div>
                <div>{props.profile.fullName}</div>
            </div>
        </div>
    )
};

export default ProfileInfo;
