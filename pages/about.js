import React from 'react'
import Image from 'next/image'

export default function contact() {
  return (
    <div className="mx-auto max-w-screen-md bg-white-100">
      <div className="flex flex-row justify-between">
        <div className="basis-1/2">
          <h1>자기소개 </h1>
          <p> 이름: 노수빈</p>
          <p>나이: 21세</p>
          <p>생년월일: 2002.08.26</p>
          <p>
            학교:
            <a href="https://www.joongbu.ac.kr/is/">중부대학교 정보보호학과</a>
          </p>
          <p>전화번호: 010-5499-7258</p>
          <p>사는 곳: 서울시 강서구 화곡6동 ---</p>
          <div className="basis-1-2">
            <Image
              src="/images/me1.jpg"
              width={50}
              height={50}
              layout="responsive"
            ></Image>
          </div>
        </div>
      </div>
    </div>
  )
}
