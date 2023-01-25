import React, { Component } from 'react';

import Card from "./Card";
import styles from "./Cards.module.css";
import iphone11 from "../images/iphone11.jpg"



class Cards extends Component {
    render() {
        return (
            <div className={styles.container}>
                <Card image={iphone11} name="Iphone 11" cost="800 $" />
                <Card image={iphone11} name="Iphone 11" cost="800 $" />
                <Card image={iphone11} name="Iphone 11" cost="800 $" />
                <Card image={iphone11} name="Iphone 11" cost="800 $" />
            </div>
        );
    }
}

export default Cards;