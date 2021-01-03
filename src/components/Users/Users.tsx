import styles from "./Users.module.css";
import defaultAvatar from "../../assets/images/defaultAvatar.png";
import React from "react";
import {UserType} from "../../redux/rootStateTypes";
import {NavLink} from "react-router-dom";

type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void,
    currentPage: number,
    users: Array<UserType>,
    follow: (userId: number) => void,
    unfollow: (userId: number) => void,
    toggleIsFollowingProgress: (userId: number, isFetching: boolean) => void,
    followingInProgress: Array<number>,
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
                {pages.map((p, index) => {
                  return  <span
                        onClick={() => props.onPageChanged(p)}
                        key={index}
                        className={props.currentPage === p ? styles.selectedPage : ""}>{p}
                    </span>})}
            </div>

            {
                props.users.map(u => {
                        return <div className={styles.wrapperUser} key={u.id}>
                            <div>
                                <NavLink to={`/profile/${u.id}`}>
                                    <img className={styles.userPhoto} alt={"user_img"}
                                         src={u.photos.small ? u.photos.small : defaultAvatar}/>
                                </NavLink>
                            </div>
                            <div>
                                {u.followed ?
                                    <button
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => props.unfollow(u.id)}>Unfollow
                                    </button> :
                                    <button
                                        disabled={props.followingInProgress.some(id => id === u.id)}
                                        onClick={() => props.follow(u.id)}>Follow</button>
                                }
                            </div>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                    },
                )
            }
        </div>
    );
}

export default User;