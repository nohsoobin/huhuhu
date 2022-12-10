import Head from 'next/head'
import React from 'react'
import styles from '../styles/Home.module.css'

export default function AboutPage() {
  const name = '노수빈'

  return (
    <div className={styles.container}>
      <Head>
        <title>노수빈 개인용 포트폴리오</title>
      </Head>
      <main className={styles.main}>
        <h1>노수빈의 개인용 포트폴리오</h1>
        <p>안녕하세요 {name} 님! 어서오십시오.</p>
        <div>
          <Image
            src="/images/hi.jpg"
            width={150}
            height={150}
            layout="responsive"
          ></Image>
        </div>
      </main>
    </div>
  )
}
