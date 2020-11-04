import React from 'react';
import styles from './Navbar.module.css';
import {FaMale, FaEnvelope, FaNewspaper, FaMusic, FaCog, FaUsers, FaSignInAlt} from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaMale color="#8DC63F"/></div>
                    <div>Profile</div>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaEnvelope color="#662D91"/></div>
                    <div>Messages</div>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaNewspaper color="#EE5187"/></div>
                    <div>News</div>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaMusic color="#F7941E"/></div>
                    <div>Music</div>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaCog color="#1C75BC"/></div>
                    <div>Settings</div>
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.iconWrapper}>
                    <div className={styles.icon}><FaUsers color="#9E1F63"/></div>
                    <div>Users</div>
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
