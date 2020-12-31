import React from 'react';
import styles from './Header.module.css';
import logo from "../../assets/images/logo.png"
import {NavLink} from "react-router-dom";
import {UserData} from "../../redux/rootStateTypes";

type HeaderPropsType = {
    userData: UserData,
    isAuth: boolean,
}

const Header = (props: HeaderPropsType) => {
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <img src={logo} alt={"logo"}/>
                <div className={styles.login}>
                    {props.isAuth ? props.userData.login : <div><NavLink to={'/login'}>Login</NavLink></div>}
                </div>
            </div>
        </header>
    )
}

export default Header;
