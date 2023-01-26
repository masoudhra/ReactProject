import React from 'react';

import styles from "./Logos.module.css";
import apple from "../images/applelogo.png";
import samsung from "../images/Samsunglogo.png";
import xiaomi from "../images/Xiaomilogo.png";

const Logos = () => {
    return (
        <div className={styles.container}>
            <h3>Who Support Us?</h3>
            <img src={apple} alt="logo" />
            <img src={samsung} alt="logo" />
            <img src={xiaomi} alt="logo" />
        </div>
    );
};



export default Logos;