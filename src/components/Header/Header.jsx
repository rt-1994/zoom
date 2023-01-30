import React from 'react';
import classNames from "classnames";
import styles from './Header.scss';
import logo from '../../assets/images/logo.svg'
import logoMob from '../../assets/images/logo-mob.svg'
import search from '../../assets/images/icons/search.svg'

import Menu from '../Menu/Menu';


const Header = () => {
    return (
            <header className={styles.header} id="header">
                <div className={styles.headerBlock}>
                    <a href="/" className={styles.headerLogo}>
                        <img className={styles.headerLogoBig} src={logo} alt="Логотип"/>
                        <img className={styles.headerLogoMob} src={logoMob} alt="Логотип"/>
                    </a>
                    <div className={styles.headerBurger} id="burgerBtn"></div>
                    <ul className={styles.headerMenu}>
                        <li className={styles.headerMenuItem}>
                            <a href="#">Специалисты</a>
                        </li>
                        <li className={styles.headerMenuItem}>
                            <a href="#">Проекты</a>
                        </li>
                        <li className={styles.headerMenuItem}>
                            <a href="#">Компании</a>
                        </li>
                        <li className={styles.headerMenuItem}>
                            <a href="#">Вакансии</a>
                        </li>
                    </ul>
                    <div className={styles.headerSearch}>
                        <input type="text" className={styles.headerSearchInput} placeholder="Поиск ..."/>
                        <img src={search}/>
                    </div>
                    <div className={styles.headerButtons}>
                        <a href="#" className={styles.headerButtonsLogin}>Войти</a>
                        <a href="#" className={classNames(styles.button, styles.headerButtonsReg)}>
                            <span>Регистрация</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M9.586 11L7.05 8.46405L8.464 7.05005L13.414 12L8.464 16.95L7.05 15.536L9.586 13H3V11H9.586Z"
                                      fill="#FAFAFF"/>
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                      d="M11 3H19C20.1 3 21 3.9 21 5V19C21 20.1 20.1 21 19 21H11V19H19V5H11V3Z"
                                      fill="#FAFAFF"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <Menu/>
            </header>
    )
}

export default Header