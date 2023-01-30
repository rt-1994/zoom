import React from 'react';
import classNames from "classnames";
import defStyles from "../../styles.scss";
import styles from './Main.scss';
import filter from '../../assets/images/icons/filter.svg';
import reload from '../../assets/images/icons/reload.svg';
import exit from '../../assets/images/icons/exit.svg';

import Card from "../Card/Card";


const Main = () => {
    return (
            <main className={styles.mainContent}>
                <div className = {defStyles.container}>
                    <div className={styles.mainContentExplore}>
                        <ul className={styles.mainContentExploreList}>
                            <li><a href="">Главная</a></li>
                            <li><a href="">Каталог</a></li>
                        </ul>
                    </div>
                    <div className={styles.title}>
                        <h2 className={styles.titleHead}>Найдено проектов</h2>
                        <span className={styles.count}>1321</span>
                    </div>
                    <div className={styles.mainContentInner}>
                        <input type="checkbox" name="" id="filter" className={styles.filterCheck}/>
                        <label htmlFor="filter">
                    <span className={styles.filterButton}>
                        <img src={filter} alt=""/>
                        <span>Фильтр</span>
                    </span>
                        </label>
                        <div className={styles.filter}>
                            <div className={styles.filterHeader}>
                                <div className={styles.filterContainer}>
                                    <div className={styles.filterHeaderInner}>
                                        <div className={styles.filterHeaderTitle}>
                                            <label htmlFor="filter"><img src={exit} alt=""/></label>
                                            Фильтр
                                        </div>
                                        <div className={styles.filterHeaderReload}>
                                            <img src={reload} alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={styles.filterContainer}>
                                <div className={styles.filterBody}>
                                    <div className={styles.filterBodyCity}>
                                        <h4>Страна</h4>
                                        <select name="" id="">
                                            <option value="">Россия</option>
                                            <option value="">Россия</option>
                                            <option value="">Россия</option>
                                        </select>
                                    </div>
                                    <div className={styles.filterBodyCard}>

                                        <h4>Стадия производства </h4>
                                        <div className={styles.filterBodyCardEl}>
                                            <span><input type="radio" name="radio" id="all" defaultChecked={true}/><label
                                                htmlFor="all">Все</label></span>
                                            <span className={styles.filterBodyCardCount}>100</span>
                                        </div>
                                        <div className={styles.filterBodyCardEl}>
                                            <span><input type="radio" name="radio" id="casting"/><label
                                                htmlFor="casting">Кастинг</label></span>
                                            <span className={styles.filterBodyCardCount}>100</span>
                                        </div>
                                        <div className={styles.filterBodyCardEl}>
                                            <span><input type="radio" name="radio" id="in-process"/><label
                                                htmlFor="in-process">Идут съемки</label></span>
                                            <span className={styles.filterBodyCardCount}>100</span>
                                        </div>
                                    </div>
                                    <div className={styles.filterBodySpec}>
                                        <h4>Вид проекта</h4>
                                        <div className={styles.filterBodySpecEl}>
                                            <span><input type="checkbox" name="" id="cinema" defaultChecked={true} /><label
                                                htmlFor="cinema">Кино</label></span>
                                            <span className={styles.filterBodySpecCount}>100</span>
                                        </div>
                                        <div className={styles.filterBodySpecEl}>
                                            <span><input type="checkbox" name="" id="serial"/><label
                                                htmlFor="serial">Сериал</label></span><span
                                            className={styles.filterBodySpecCount}>100</span>
                                        </div>
                                        <div className={styles.filterBodySpecEl}>
                                            <span><input type="checkbox" name="" id="add"/><label
                                                htmlFor="add">Реклама</label></span><span
                                            className={styles.filterBodySpecCount}>100</span>
                                        </div>
                                        <div className={styles.filterBodySpecEl}>
                                            <span><input type="checkbox" name="" id="clip"/><label
                                                htmlFor="clip">Клип</label></span><span
                                            className={styles.filterBodySpecCount}>100</span>
                                        </div>
                                        <div className={styles.filterBodySpecEl}>
                                            <span><input type="checkbox" name="" id="anime"/><label
                                                htmlFor="anime">Мультфильм</label></span>
                                            <span className={styles.filterBodySpecCount}>100</span>
                                        </div>

                                        <a href="#" className={styles.filterBodySpecAdd}>Еще 4 вида</a>
                                    </div>
                                    <div className={styles.filterBodySkills}>
                                        <h4>Жанры</h4>
                                        <div className={styles.filterBodySkillsEl}>
                                            <span><input type="checkbox" name="" id="triller" defaultChecked={true} /><label
                                                htmlFor="triller">Боевик</label></span>
                                            <span className={styles.filterBodySkillsCount}>100</span>
                                        </div>
                                        <div className={styles.filterBodySkillsEl}>
                                            <span><input type="checkbox" name="" id="fantastic"/><label
                                                htmlFor="fantastic">Фантастика</label></span>
                                            <span className={styles.filterBodySkillsCount}>100</span>
                                        </div>
                                        <div className={styles.filterBodySkillsEl}>
                                            <span><input type="checkbox" name="" id="commedy"/><label
                                                htmlFor="commedy">Комедия</label></span>
                                            <span className={styles.filterBodySkillsCount}>100</span>
                                        </div>
                                        <div className={styles.filterBodySkillsEl}>
                                            <span><input type="checkbox" name="" id="romantic"/><label
                                                htmlFor="romantic">Романтика</label></span>
                                            <span className={styles.filterBodySkillsCount}>100</span>
                                        </div>
                                        <div className={styles.filterBodySkillsEl}>
                                            <span><input type="checkbox" name="" id="dramma"/><label
                                                htmlFor="dramma">Драма</label></span>
                                            <span className={styles.filterBodySkillsCount}>100</span>
                                        </div>
                                        <a href="#" className={styles.filterBodySkillsAdd}>Еще 21 жанр</a>
                                    </div>
                                    <div className={styles.filterBodyButton}>
                                        <a href="">
                                    <span><svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                               xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
                                                stroke="#fff" stroke-width="2" stroke-linecap="round"
                                                stroke-linejoin="round"/>
                                            <path d="M14 14.0001L11.1 11.1001" stroke="#fff" stroke-width="2"
                                                  stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>
                                            <span>Найти</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.cards}>
                            <div className={styles.cardsSort}>
                                <select className={styles.cardsSortSelect} name="" id="">
                                    <option value="">Сначала новые</option>
                                </select>
                            </div>

                            <div className={styles.cardsInner}>
                                <Card/>
                                <Card/>
                                <Card/>
                                <Card/>
                            </div>

                            <div className={styles.cardsPagination}>
                                <div className={styles.cardsPaginationButton}>
                                    <a href="" className={styles.cardsPaginationButtonPrev}>
                                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6.29294 0.292969L0.585938 5.99997L6.29294 11.707L7.70694 10.293L3.41394 5.99997L7.70694 1.70697L6.29294 0.292969Z"
                                                fill="#333333"/>
                                        </svg>
                                    </a>
                                    <ul className={styles.cardsPaginationButtonPages}>
                                        <li className={classNames(styles.cardsPaginationButtonPagesItem,  styles.activeButton)}>
                                            <a href="">1</a>
                                        </li>
                                        <li className={styles.cardsPaginationButtonPagesItem}>
                                            <a href="">2</a>
                                        </li>
                                        <li className={styles.cardsPaginationButtonPagesItem}>
                                            <a href="">3</a>
                                        </li>
                                    </ul>
                                    <a href="" className={styles.cardsPaginationButtonNext}>
                                        <svg width="16"
                                             height="16" viewBox="0 0 16 16" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 12L10 8L6 4" stroke="#6A7A8C" stroke-width="2"
                                                  stroke-linecap="round"
                                                  stroke-linejoin="round"/>
                                        </svg>
                                    </a>
                                </div>
                                <div className={styles.cardsPaginationCounter}>
                                    <span>Показано</span><span className="from">1</span>–<span className="to">10</span>из<span
                                    className={styles.count}>18</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
)
}
export default Main