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
          <a>수빈공주에 대해</a>
        </Link>
        <Link href="/profile">
          <a>수빈공주의 프로필</a>
        </Link>
        <Link href="/contact">
          <a>수빈공주 소개</a>
        </Link>
      </div>
    </div>
  )
}
