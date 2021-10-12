import React, { useState } from 'react';

import PokeLoader from '../PokeLoader/PokeLoader'

import styles from './Image.module.css'



const Image = (props) => {
  const [isLoaded, setIsLaded] = useState(false)
  const handleLoad = () => setIsLaded(true)


  return (
    <div className={styles.img__container}>
      {
        !isLoaded
          ? (
              <div className={styles.img_loader}>
                  <PokeLoader />
              </div>
          )
          : null
      }
      <img {...props} alt="Pokedex" onLoad={handleLoad} />
    </div>
  )
}

export default Image