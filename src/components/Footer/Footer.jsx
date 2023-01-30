import React from 'react';
import styles from './Footer.scss';
import defStyles from '../../styles.scss';
import classNames from 'classnames';
import logo from '../../assets/images/logo.svg';
import instagram from '../../assets/images/icons/instagram.svg';
import facebook from '../../assets/images/icons/facebook.svg';
import telegram from '../../assets/images/icons/telegram.svg';
import send from '../../assets/images/icons/send.svg';


const Footer = ()=>{
    return (
            <footer className={styles.footer}>
                <div className={classNames(styles.footer, defStyles.container)}>
                    <div className={styles.footerHead}>
                        <a href="/" className={styles.headerLogo}>
                            <img src={logo} alt="Логотип"/>
                        </a>
                        <div className={styles.footerSocial}>
                            <a href="#" className={styles.footerSocialLink}>
                                <img src={instagram}/>
                            </a>
                            <a href="#" className={styles.footerSocialLink}>
                                <img src={facebook}/>
                            </a>
                            <a href="#" className={styles.footerSocialLink}>
                                <img src={telegram}/>
                            </a>
                        </div>
                    </div>
                    <div className={styles.footerBlock}>
                        <div className={styles.footerBlockCol}>
                            <div className={styles.footerTitle}>Для специалистов</div>
                            <a href="#" className={styles.footerLink}>Список проектов</a>
                            <a href="#" className={styles.footerLink}>Вакансии / Заявки</a>
                            <a href="#" className={styles.footerLink}>Опубликовать резюме</a>
                        </div>
                        <div className={styles.footerBlockCol}>
                            <div className={styles.footerTitle}>Для нанимателей</div>
                            <a href="#" className={styles.footerLink}>Каталог специалистов</a>
                            <a href="#" className={styles.footerLink}>Опубликовать проект</a>
                            <a href="#" className={styles.footerLink}>Опубликовать заявку</a>
                        </div>
                        <div className={styles.footerBlockCol}>
                            <div className={styles.footerTitle}>Информация</div>
                            <a href="#" className={styles.footerLink}>О нас</a>
                            <a href="#" className={styles.footerLink}>Тарифы</a>
                            <a href="#" className={styles.footerLink}>Вопросы и ответы</a>
                        </div>
                        <div className={styles.footerBlockCol}>
                            <div className={styles.footerTitle}>Личный кабинет</div>
                            <a href="#" className={styles.footerLink}>Войти</a>
                            <a href="#" className={styles.footerLink}>Зарегистрироваться</a>
                            <a href="#" className={styles.footerLink}>Помощь</a>
                        </div>
                        <div className={styles.footerBlockCol}>
                            <div className={styles.footerTitle}>Подпишитесь на новости</div>
                            <div className={styles.footerSubscribe}>
                                <input type="text" className={styles.footerInput} placeholder="Введите Email"/>
                                <img src={send}/>
                            </div>
                        </div>
                    </div>
                    <div className={classNames(styles.footerHead, styles.footerBottom)}>
                        <span>© 2021 «ZoomFilm». Все права защищены</span>
                        <div className={styles.footerHeadLinks}>
                            <a href="#">Соглашение</a>
                            <a href="#">Правила использования</a>
                        </div>
                    </div>
                </div>
            </footer>
    )
}

export default Footer