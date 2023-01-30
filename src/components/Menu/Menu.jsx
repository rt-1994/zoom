import React from 'react';
import classNames from "classnames";
import styles from './Menu.scss';

const Menu = () => {
    return (
        <>
            <div className={styles.headerModal}>
                <div className={styles.headerModalBlock}>
                    <a href="#" className={styles.headerModalLinkBig}>Специалисты</a>
                    <a href="#" className={styles.headerModalLink}>Сценаристы</a>
                    <a href="#" className={styles.headerModalLink}>Концепт-художники</a>
                    <a href="#" className={styles.headerModalLink}>Тритмены</a>
                    <a href="#" className={styles.headerModalLink}>Раскадровщики</a>
                    <a href="#" className={styles.headerModalLink}>Режиссеры</a>
                    <a href="#" className={styles.headerModalLink}>Вторые режиссеры</a>
                    <a href="#" className={styles.headerModalLink}>Кастинг-директора</a>
                    <a href="#" className={styles.headerModalLink}>Скрипт-супервайзеры</a>
                    <a href="#" className={styles.headerModalLink}>Ассистент режиссера</a>
                    <a href="#" className={styles.headerModalLink}>Оператор постановщик</a>
                    <a href="#" className={styles.headerModalLinkBlue}>Показать все</a>
                </div>
                <div className={styles.headerModalBlock}>
                    <a href="#" className={styles.headerModalLinkBig}>Проекты/Вакансии</a>
                    <a href="#" className={styles.headerModalLink}>Кино</a>
                    <a href="#" className={styles.headerModalLink}>Сериал</a>
                    <a href="#" className={styles.headerModalLink}>Клип</a>
                    <a href="#" className={styles.headerModalLink}>Реклама</a>
                    <a href="#" className={styles.headerModalLink}>Мультфильм</a>
                    <a href="#" className={styles.headerModalLink}>Мультсериалы</a>
                    <a href="#" className={styles.headerModalLink}>Аниме</a>
                    <a href="#" className={styles.headerModalLink}>ТВ-шоу</a>
                    <a href="#" className={styles.headerModalLink}>Другое</a>
                </div>
                <div className={styles.headerModalBlock}>
                    <a href="#" className={styles.headerModalLinkBig}>Компании</a>
                    <a href="#" className={styles.headerModalLink}>Агентства</a>
                    <a href="#" className={styles.headerModalLink}>Киностудии</a>
                    <a href="#" className={styles.headerModalLink}>Студии звукозаписи</a>
                    <a href="#" className={styles.headerModalLink}>Телеканалы</a>
                    <a href="#" className={styles.headerModalLink}>Радиостанции</a>
                    <a href="#" className={styles.headerModalLink}>Театры</a>
                </div>
                <div className={styles.headerModalBlock}>
                    <a href="#" className={styles.headerModalLinkBig}>О проекте</a>
                    <a href="#" className={styles.headerModalLinkBig}>Обратная связь</a>
                </div>
            </div>
        </>
    )
}

export default Menu