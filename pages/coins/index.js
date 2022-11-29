import axios from 'axios'
import React from 'react'
import styles from '../../styles/Coin.module.css'

export default function CoinList({ coinData }) {
  const coins = coinData.coins
  return (
    <div className={styles.container}>
      <h1>수빈공주 List</h1>
      <div className={styles.coinContainer}>
        {coins.map((coin) => {
          return (
            <div key={coin.id} className={styles.coinItem}>
              <Coin coin={coin} />
            </div>
          )
        })}
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const result = await axios.get(
    'https://api.coinstats.app/public/v1/coins?skip=0'
  )

  return {
    props: {
      coinData: result.data,
    },
    revalidate: 10,
  }
}
