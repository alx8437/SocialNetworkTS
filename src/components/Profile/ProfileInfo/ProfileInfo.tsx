import React from "react";
import styles from './ProfileInfo.module.css';
import {ProfileType} from "../../../redux/stateTypes";

type ProfileInfoPropsType = {
    profile: ProfileType,
}


const ProfileInfo = (props: ProfileInfoPropsType) => {

    return (
        <div>
            <div className={styles.content}>
                    <div><img
                        src={props.profile.photos.small ? props.profile.photos.small : ""}
                        alt="avatar"/>
                        </div>
                    <div>{props.profile.fullName}</div>
            </div>
        </div>
    )
};

export default ProfileInfo;
