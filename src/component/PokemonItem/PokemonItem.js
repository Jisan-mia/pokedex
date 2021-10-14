import React, { useState, useEffect } from 'react'
import Heart from '../Heart/Heart'
import Image from '../Image/Image'
import InfoButton from '../InfoButton/InfoButton'
import Stats from '../Stats/Stats'

import styles from './PokemonItem.module.css';

const PokemonItem = ({ pokemon, favoriteIds, setFavoriteIds }) => {
  const [isFavorite, setIsFavorite] = useState(favoriteIds.includes(pokemon.id));

  const { name, sprites: {front_default} } = pokemon;

  useEffect(() => {
    localStorage.setItem('favoriteIds', JSON.stringify(favoriteIds))
  }, [favoriteIds])


  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
    let newFavoriteIds = [...favoriteIds];
    if(favoriteIds.find(id => id === pokemon.id)) {
      newFavoriteIds = favoriteIds.filter(id => id !== pokemon.id)
    } else {
      newFavoriteIds = [...favoriteIds, pokemon.id]
    }
    setFavoriteIds([...newFavoriteIds])    
  }


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

      <div className={styles.heart}>
        <Heart isFavorite={favoriteIds.includes(pokemon.id)} setIsFavorite={handleFavorite} />
      </div>

    </div>
  )
}

export default PokemonItem;
