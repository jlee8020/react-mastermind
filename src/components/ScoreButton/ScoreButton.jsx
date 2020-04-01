import React from 'react';
import styles from './ScoreButton.module.css'

console.log(styles);

const ScoreButton = (props) => (
  <button className={styles.button}>
     ✔
   </button>
);

export default ScoreButton;