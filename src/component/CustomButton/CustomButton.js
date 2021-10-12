import React from 'react'
import styles from './CustomButton.module.css'
const CustomButton = ({variant, handleClick, children}) => {
  return (
    <button 
      className={
        [styles.buttonDefault, variant === 'primary' ? styles.primary : styles.secondary].join(" ")
      } 
      onClick={handleClick}>
      {children}
    </button>
  )
}

export default CustomButton
