import React from "react";
import styles from "./Card.scss";
import project from "../../assets/images/project.jpeg";
import star from "../../assets/images/icons/star.svg";


const Card = ()=>{
    return(
            <div className={styles.projectCard}>
                <div className={styles.projectCardImg}>
                    <img src={project} alt=""/>
                    <span className={styles.projectCardImgElect}><img src={star} alt=""/></span>
                </div>
                <div className={styles.projectCardHeader}>
                    <h3>Артек. Большое путешествие (2021)</h3>
                    <span className={styles.projectCardHeaderYear}>2022</span>
                    <span className={styles.projectCardHeaderType}>Сериалы</span>
                </div>
                <div className={styles.projectCardStatus}>
                    <div className={styles.projectCardStatusMsg}><span>Идет кастинг</span></div>
                    <span>Участников:</span><span
                    className={styles.projectCardStatusCount}>21</span>
                </div>
            </div>
    )
}

export default Card