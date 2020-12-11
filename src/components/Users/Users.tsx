import React from "react";
import {User} from "../../redux/types";
import styles from "./Users.module.css";
import axios from "axios"
import user from "../../assets/images/user.png"

type UsersPropsType = {
    users: Array<User>
    followUser: (userId: number) => void
    unfollowUser: (userId: number) => void
    setUsers: (users: Array<User>) => void
}

type GetUsersType = {
    items: Array<User>
    totalCount: number
    error: null
}

class Users extends React.Component<UsersPropsType> {
    constructor(props: UsersPropsType) {
        super(props);
        if (this.props.users.length === 0) {
            axios.get<GetUsersType>("https://social-network.samuraijs.com/api/1.0/users")
                .then(response => {
                    this.props.setUsers(response.data.items)
                })
        }
    }

    render() {
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
                    this.props.users.map(u =>
                        <div className={styles.wrapperUser} key={u.id}>
                            <div>
                                <img className={styles.userPhoto} alt={"user_img"} src={u.photos.small ? u.photos.small : user}/>
                            </div>
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
                                        this.props.unfollowUser(u.id)
                                    }}>Unfollow</button>
                                    : <button onClick={() => {
                                        this.props.followUser(u.id)
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

}

export default Users