import React from 'react';
import styles from './Navbar.module.css';
import {FaMale, FaEnvelope, FaNewspaper, FaMusic, FaCog, FaUsers, FaSignInAlt} from 'react-icons/fa';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaMale color="#8DC63F"/></div>
                    <NavLink to="/profile" activeClassName={styles.active}>Profile</NavLink>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaEnvelope color="#662D91"/></div>
                    <NavLink to="/dialogs" activeClassName={styles.active}>Messages</NavLink>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaNewspaper color="#EE5187"/></div>
                    <NavLink to="/news" activeClassName={styles.active}>News</NavLink>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaMusic color="#F7941E"/></div>
                    <NavLink to="/music" activeClassName={styles.active}>Music</NavLink>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaCog color="#1C75BC"/></div>
                    <NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaUsers color="#9E1F63"/></div>
                    <NavLink to="/users" activeClassName={styles.active}>Users</NavLink>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaSignInAlt color="#a8dadc"/></div>
                    <div>Login</div>
                </div>
            </div>
        </nav>
    )
};


export default Navbar;
