import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Pagination from '../Pagination/Pagination';
import styles from './Pokemon.module.css'
import Grid from '../../Grid/Grid';
import PokemonItem from '../PokemonItem/PokemonItem';
import PokeLoader from '../PokeLoader/PokeLoader';


const Pokemon = () => {
  const [pokemonList, setPokemonList] = useState([]);
  const [links, setLinks] = useState({
    next: '',
    prev: '',
  })
  const [currentUrl, setCurrentUrl] = useState('https://pokeapi.co/api/v2/pokemon?limit=20')

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchInitialPokemonData()
  }, [currentUrl])


  // console.log(pokemonList)

  const fetchInitialPokemonData = async () => {
    try{
      const responseData = await axios.get(currentUrl)
      const pokeData = responseData.data
      setIsLoading(false);
      setLinks({
        ...links, 
        next: pokeData.next,
        prev: pokeData.previous
      })

      const fetchingData = async (callback , poke) => {
        const data = await fetchEachPokemonData(poke.url);
        return callback(data)
      }
      let arr = []
      pokeData.results.forEach((poke) => {
        const callback = async result => {
          await arr.push(result)
          setPokemonList([...arr])
        }
        
        fetchingData(callback, poke)
      })


    } catch (err) {
      alert(err.message);
    }
  }
 

  const fetchEachPokemonData = async (api) => {
    const resData = await axios.get(api);
    return resData.data
  }

  const gotToPrevPage = () => {
    setCurrentUrl(links.prev)
  }

  const gotToNextPage = () => {
    setCurrentUrl(links.next)
  }

  return (
    <div className={styles.container}>

      {
        pokemonList.length === 20 ? (
          <>
            <Grid>
              {
                pokemonList.length !== 0 &&  pokemonList.map(item => 
                  <PokemonItem pokemon={item}/>
                )
              }
            </Grid>

            <div className='pagination-area'>
              <Pagination
                gotToPrevPage={links.prev ? gotToPrevPage : null}
                gotToNextPage={links.next ? gotToNextPage : null}
              />
            </div>
          </>
        ) 
        : 
        (
          <div className={styles.loading_container}>
            <PokeLoader />
          </div>
        )
        
      }
      

    </div>
  )
}

export default Pokemon;