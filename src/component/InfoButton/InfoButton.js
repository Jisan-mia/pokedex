import React from 'react'
import { AiOutlineInfo } from 'react-icons/ai'
import styles from './InfoButton.module.css'

const InfoButton = () => {
  return (
    <button className={styles.infoCont} title="More Info">
      <AiOutlineInfo className={styles.icon} size={20} />
    </button>
  )
}

export default InfoButton
