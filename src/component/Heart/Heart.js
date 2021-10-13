import React from 'react'
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai'

import styles from './Heart.module.css'

const Heart = ({ isFavorite, setIsFavorite }) => {
  return (
    <button className={styles.heart} title='Favorite' onClick={setIsFavorite}>
      {
        isFavorite ? <AiFillHeart className={styles.favorite__icon} size={24}/> :  <AiOutlineHeart className={styles.icon} size={24} />
      }
    </button>
  )
}

export default Heart
