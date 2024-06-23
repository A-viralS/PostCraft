'use client'
import { useSession } from 'next-auth/react'
import React from 'react'

const Intro = () => {
  const { data, status } = useSession()

  if (status === 'authenticated' && data?.user) {
    console.log('sessionData:', data.user.name)
  } else {
    console.log('No user is authenticated')
  }
  return (
    <span style={{ display: 'inline' }}>
      {data?.user ? data.user.name : 'you'}
    </span>
  )
}

export default Intro
