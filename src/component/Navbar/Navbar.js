import React from 'react'
import styles from './Navbar.module.css'

const Navbar = () => {
  return (
    <nav className={styles.nav__container}>
      <div className={styles.nav__wrapper}>
        <div className={styles.brand}>Pokedex</div>

        <ul className={styles.nav__list}>
          <li className={styles.navList__item}>Home</li>
          <li className={styles.navList__item}>Favorite</li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
