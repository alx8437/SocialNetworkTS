import React from 'react';
import styles from './Header.module.css';
import logo from "../../assets/images/logo.png"



const Header = () => {
    debugger
    return (
        <header className={styles.header}>
            <div className={styles.headerWrapper}>
                <img src={logo}></img>
                <div className={styles.login}>
                    login
                </div>
            </div>
        </header>
    )
}

export default Header;
