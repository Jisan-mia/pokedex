import React from 'react'
import styles from './Grid.module.css'

const Grid = ({ children }) => {
  return (
    <div className={styles.grid__container}>
      {children}
    </div>
  )
}

export default Grid
