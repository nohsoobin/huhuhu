import Link from 'next/link'
import React from 'react'
import styles from '../styles/Navbar.module.css'

export default function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <a href="https://www.instagram.com/norubin___826/?hl=ko">
            노수빈 인스타그램
          </a>
        </li>
        <li>
          <a href="https://blog.naver.com/nohsoobin18">노수빈 네이버 블로그</a>
        </li>
      </ul>
    </div>
  )
}
