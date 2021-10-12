import React from 'react';
import StatItem  from "../StatItem/StatItem";
import {StatsStatNameAbbreviation} from './util'

import styles from './Stats.module.css'

const Stats = ({ pokemon }) => {
  // console.log(pokemon.stats)
  return (
    <div className={styles.stats__container}>
      {
        pokemon.stats.length !== 0 && 
          pokemon.stats.map((entry, idx) => (
            <StatItem
              key={entry.stat.name}
              value={entry.base_stat}
              label={StatsStatNameAbbreviation(entry.stat.name)}
              unit=""
            />
          ))
      }

      <StatItem
        value={pokemon.height / 10}
        label='Height'
        unit="m"
      />

      <StatItem
        value={pokemon.weight / 10}
        label='Weight'
        unit="kg"
      />


    </div>
  )
}

export default Stats
