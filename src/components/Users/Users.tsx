import React from "react";
import {User} from "../../redux/types";
import styles from "./Users.module.css";
import {v1} from "uuid";

type UsersPropsType = {
    users: Array<User>
    followUser: (userId: string) => void
    unfollowUser: (userId: string) => void
    setUsers: (users: Array<User>) => void
}

const Users = (props: UsersPropsType) => {
    if (props.users.length === 0) {
        props.setUsers([
            {
                id: v1(),
                followed: true,
                fullname: "Alex",
                status: "Hi everyone",
                location: {city: "Krasnodar", country: "Russia"}
            },
            {
                id: v1(),
                followed: false,
                fullname: "Danya",
                status: "Hi there",
                location: {city: "Moscow", country: "Russia"}
            },
            {
                id: v1(),
                followed: true,
                fullname: "Mira",
                status: "Hi",
                location: {city: "Los-Angeles", country: "USA"}
            }

        ])
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.pageChange}>
                {/*                {pageCount.map(p => {
                    return <span  onClick={() => {
                        props.onPageChanged(p);
                    }} className={(p === props.currentPage) ? styles.pageActive : ''}>{p}</span>;
                })}*/}
            </div>

            {
                props.users.map(u => <div key={u.id}>
                    <span>
                        <div>
{/*                            <NavLink to={"/profile/" + u.id}>
                                <img
                                    className={styles.userPhoto}
                                    src={(u.photos.small === null) ? avatar : u.photos.small}
                                />
                            </NavLink>*/}
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
                    </span>
                        <span>
                        <span>
                            <div>{u.fullname}</div>
                            <div>{u.status}</div>
                        </span>
                        <span>
                            <div>{u.location.country}</div>
                            <div>{u.location.city}</div>
                        </span>

                    </span>
                    </div>,
                )
            }
        </div>
    );

}

export default Users