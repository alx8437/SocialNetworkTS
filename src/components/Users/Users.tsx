import React from "react";
import {User} from "../../redux/types";
import styles from "./Users.module.css";
import axios from "axios"
import user from "../../assets/images/user.png"

type UsersPropsType = {
    users: Array<User>,
    pageSize: number,
    followUser: (userId: number) => void,
    unfollowUser: (userId: number) => void,
    setUsers: (users: Array<User>) => void,
    totalUsersCount: number,
    currentPage: number,
    changeCurrentPage: (currentPage: number) => void,
    setTotalCountPages: (currentPage: number) => void,
}

type GetUsersType = {
    items: Array<User>,
    totalCount: number,
    error: null,
}

class Users extends React.Component<UsersPropsType> {
    componentDidMount(): void {
        if (this.props.users.length === 0) {
            axios.get<GetUsersType>(
                `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    debugger
                    this.props.setUsers(response.data.items);
                    this.props.setTotalCountPages(response.data.totalCount)
                })
        }
    }

    onPageChanged = (pageNumber: number) => {
        this.props.changeCurrentPage(pageNumber);
        axios.get<GetUsersType>(
            `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    render() {
        const pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        const pages: Array<number> = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return (
            <div className={styles.wrapper}>
                <div className={styles.pageChange}>
                    {pages.map((p, index) =>
                        <span
                            onClick={() => this.onPageChanged(p)}
                            key={index}
                            className={this.props.currentPage === p ? styles.selectedPage : ""}>{p}</span>)}
                </div>

                {
                    this.props.users.map(u =>
                        <div className={styles.wrapperUser} key={u.id}>
                            <div>
                                <img className={styles.userPhoto} alt={"user_img"} src={u.photos.small ? u.photos.small : user}/>
                            </div>
                            <div>

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