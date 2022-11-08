import React from "react";
import styles from "./CardContent.module.css";


const CardContent = ({ title, score, by, time, descendants }) => {
    const date = (new Date(time * 1000)).toLocaleString();

    return (
        <React.Fragment>
            {title && <h2>{title}</h2>}
            {by && time && (
                <div className={styles.cardContent}>
                    <span className={styles.nickname}>Автор: <strong>{by}</strong></span>
                    <span className={styles.date}>Опубликовано: <strong>{date}</strong></span>
                </div>
            )}
            {score && descendants >= 0 && (
                <div className={styles.cardContent}>
                    {<span>Рейтинг: <strong>{score}</strong></span>}
                    {descendants ? (
                        <span>Комментарии: <strong>{descendants}</strong></span>
                    ) : (
                        <span>Комментариев нет</span>
                    )}
                </div>
            )}
        </React.Fragment>
    );
};


export default CardContent;
