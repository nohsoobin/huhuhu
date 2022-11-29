import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function AboutPage() {
  const name = '수빈공주'

  return (
    <div className={styles.container}>
      <Head>
        <title>About</title>
      </Head>
      <main className={styles.main}>
        <h1>About </h1>
        <p>안녕하세요 {name} 님!</p>
      </main>
    </div>
  )
}
