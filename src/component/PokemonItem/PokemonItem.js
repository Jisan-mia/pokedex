import React from 'react'
import Image from '../Image/Image'
import InfoButton from '../InfoButton/InfoButton'
import Stats from '../Stats/Stats'

import styles from './PokemonItem.module.css'

const PokemonItem = ({ pokemon }) => {
  const { name, sprites: {front_default} } = pokemon


  return (
    <div className={styles.item__container}>
      
      <Image className={styles.item__img} src={front_default} />
      

      <div className={styles.item__name}>
        {name}
      </div>

      <Stats pokemon={pokemon}/>

      <div className={styles.show__info}>
        <InfoButton />
      </div>

    </div>
  )
}

export default PokemonItem;
