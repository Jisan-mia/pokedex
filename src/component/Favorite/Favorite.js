import React, { useEffect, useState } from 'react'
import { fetchEachPokemonData } from '../../api/pokemonApi'
import Grid from '../Grid/Grid'
import PokeLoader from '../PokeLoader/PokeLoader'
import { getLocalFavorites } from '../Pokemon/Pokemon'
import PokemonItem from '../PokemonItem/PokemonItem'
import styles from './Favorite.module.css'

export const favoriteApiGenerator = (ids) => {
  return ids.map(id => `https://pokeapi.co/api/v2/pokemon/${id}`)
}

const Favorite = () => {

  const [favoriteIds, setFavoriteIds] = useState(getLocalFavorites())
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    fetchFavoritePokemons(favoriteApiGenerator(favoriteIds))
  }, [])

  useEffect(() => {
    // 
    const arr = []
    const ids = []
    pokemonList.forEach(poke => {
      if(favoriteIds.includes(poke.id)) {
        arr.push(poke)
        setPokemonList([...arr])
      }
    })
    
  }, [favoriteIds])



  
   const fetchFavoritePokemons = async (apis) => {
    const fetchingData = async (callback , api) => {
      const data = await fetchEachPokemonData(api);
      return callback(data)
    }
  
    let arr = []
    apis.forEach((api) => {
      const callback = async result => {
        await arr.push(result)
        setPokemonList([...arr])
      }
      
      fetchingData(callback, api)
    })
  }


  return (
    <div className={styles.container}>
    {
      <Grid>
        {
          pokemonList.length !== 0 ? pokemonList.map((item, idx) => 
            <PokemonItem key={idx} pokemon={item} favoriteIds={favoriteIds} setFavoriteIds={setFavoriteIds}/>
          )
          : 
          <div className={styles.loading_container}>
            <PokeLoader />
          </div>
        }
      </Grid>
    }
  </div>
  )
}

export default Favorite
