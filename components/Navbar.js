import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.links}>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/about">
          <a>노수빈은 누구인가?</a>
        </Link>
        <Link href="/profile">
          <a>노수빈은 무엇을 좋아할까??</a>
        </Link>
        <Link href="/contact">
          <a>노수빈에 대해 좀 더 궁금하다고?</a>
        </Link>
      </div>
    </div>
  )
}
