import styles from "./Users.module.css";
import user from "../../assets/images/user.png";
import React from "react";
import {UserType} from "../../redux/stateTypes";

type UsersPropsType = {
    totalUsersCount: number,
    pageSize: number,
    onPageChanged: (pageNumber: number) => void,
    currentPage: number,
    users: Array<UserType>,
    followUser: (userId: number) => void,
    unfollowUser: (userId: number) => void,
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
                            <img className={styles.userPhoto} alt={"user_img"}
                                 src={u.photos.small ? u.photos.small : user}/>
                        </div>
                        <div>
                            {u.followed
                                ? <button onClick={() => {
                                    props.unfollowUser(u.id)
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    props.followUser(u.id)
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