import React from 'react';
import styles from './Header.module.css';
import logo from "../../assets/images/logo.png"
import {NavLink} from "react-router-dom";
import {UserData} from "../../redux/rootStateTypes";

type HeaderPropsType = {
    userData: UserData,
    isAuth: boolean,
    logOutMe: () => void,
}

const Header = (props: HeaderPropsType) => {

    const logOut = () => {
        props.logOutMe();
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <img src={logo} alt={"logo"}/>
                <div className={styles.login}>
                    {props.isAuth
                        ?
                        <div>{props.userData.login} - <button onClick={logOut}>Log out</button></div>
                        :
                        <div><NavLink to={'/login'}>Login</NavLink></div>}
                </div>
            </div>
        </header>
    )
}

export default Header;
