import React from 'react'

export default function contact() {
  return (
    <div>
      <h1>자기소개 </h1>
      <p> 이름: 수빈공주</p>
      <p>나이: 21세</p>
      <p>사는 곳: 서울시 강서구 화곡6동 ---</p>
      <p>전화번호: 010-5499-7258</p>
      <div className="basis-1-2">
        <Image
          src="/img/me1.jpg"
          width={300}
          height={300}
          layout="responsive"
        ></Image>
      </div>
    </div>
  )
}
