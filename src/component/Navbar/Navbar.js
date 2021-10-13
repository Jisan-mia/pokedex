import React from 'react'
import styles from './Navbar.module.css'
import {
  Link
} from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.nav__container}>
      <div className={styles.nav__wrapper}>
        <div className={styles.brand}>
          <Link to='/'>
            Pokedex
          </Link>
        </div>

        <ul className={styles.nav__list}>
          <li className={styles.navList__item}>
           <Link to="/"> Home </Link>
          </li>
          <li className={styles.navList__item}>
            <Link to='/favorite'>  Favorite </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
