import React from "react";
import catsImage from '../../img/pixelCat2.png';
import styles from "./Loading.module.css";

const Loading = () => {
    return (
    <div>
      <p>Подожди вместе с котиком пока прогрузятся новости</p>
      <img className={styles.image} src={catsImage} alt="cat orange" />
    </div>
    );
};

export default Loading;
