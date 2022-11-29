import { useRouter } from 'next/router'
import React from 'react'

export default function Username() {
  const router = useRouter()
  console.log(router.query)
  const { username } = router.query

  return (
    <div>
      <h1>User Profile </h1>
      <p> Name: {username} </p>
    </div>
  )
}
