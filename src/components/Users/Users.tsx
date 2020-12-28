import styles from "./Users.module.css";
import defaultAvatar from "../../assets/images/defaultAvatar.png";
import React from "react";
import {UserType} from "../../redux/stateTypes";
import {NavLink} from "react-router-dom";
import axios from "axios";

type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void,
    currentPage: number,
    users: Array<UserType>,
    followUser: (userId: number) => void,
    unfollowUser: (userId: number) => void,
}

type FollowPostResponseType = {
    resultCode: number
}

const User = (props: UsersPropsType) => {
    const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    const pages: Array<number> = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.pageChange}>
                {pages.map((p, index) =>
                    <span
                        onClick={() => props.onPageChanged(p)}
                        key={index}
                        className={props.currentPage === p ? styles.selectedPage : ""}>{p}</span>)}
            </div>

            {
                props.users.map(u =>
                    <div className={styles.wrapperUser} key={u.id}>
                        <div>
                            <NavLink to={`/profile/${u.id}`}>
                                <img className={styles.userPhoto} alt={"user_img"}
                                     src={u.photos.small ? u.photos.small : defaultAvatar}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed

                                ? <button onClick={
                                    () => {
                                        axios.delete<FollowPostResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                             {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "e655fc0d-99c3-4c81-8dea-0837243fe8bf"
                                                }
                                            })
                                            .then((res) => {
                                                if (res.data.resultCode === 0) {
                                                    props.unfollowUser(u.id)
                                                }
                                            })
                                    }
                                }>Unfollow</button>

                                : <button onClick={
                                    () => {
                                        axios.post<FollowPostResponseType>(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {}, {
                                                withCredentials: true,
                                                headers: {
                                                    "API-KEY": "e655fc0d-99c3-4c81-8dea-0837243fe8bf"
                                                }
                                            })
                                            .then((res) => {
                                                if (res.data.resultCode === 0) {
                                                    props.followUser(u.id)
                                                }
                                            })
                                    }}>Follow</button>
                            }
                        </div>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </div>,
                )
            }
        </div>
    );
}

export default User;