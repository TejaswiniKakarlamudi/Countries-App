import React from 'react'
import img from './R.jpeg'
import styles from './Card.module.css';
// import styles from '
function Card({data}) {
    const { flag,name } = data;
    console.log('image',data.flag);
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <img
            src={flag}
            alt={name}
            style={{'width':'80px', 'height':'80px', 'border':'1px solid', 'margin':'5px',}}
        />
      </div>
      <div className={styles.cardName}>
        {name}
      </div>
    </div>
  )
}

export default Card
