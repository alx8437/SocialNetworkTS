import React from "react";
import styles from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/rootStateTypes";
import defaultAvatar from "../../../assets/images/defaultAvatar.png";
import ProfileStatus from "./ProfileStatus";

type ProfileInfoPropsType = {
    profile: ProfileType,
    status: string,
    updateStatus: (status: string) => void,
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
                <div className={styles.name}>{props.profile.fullName}</div>
                <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
            </div>
        </div>
    )
};

export default ProfileInfo;
