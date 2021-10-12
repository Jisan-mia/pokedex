import React from 'react'
import styles from './StatItem.module.css'

const StatItem = ({value, label, unit}) => {
  return (
    <div className={styles.statItem__container}>
      <span className={[styles.item, styles.value].join(" ")}> 
        {value} 
        {unit ? <span className={styles.unit}>{unit}</span> : null }
      </span>

      <span className={[styles.item, styles.label].join(" ")}>
        {label} 
      </span>

    </div>
  )
}

export default StatItem
