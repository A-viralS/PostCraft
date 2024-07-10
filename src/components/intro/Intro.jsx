'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
import styles from './Intro.module.css'
import Typewriter from '../Typewriter/Typewriter'
import { nunito } from '@/utils/fonts'

const Intro = () => {
  const { data, status } = useSession()

  if (status === 'authenticated' && data?.user) {
    console.log('sessionData:', data.user.name)
  } else {
    console.log('No user is authenticated')
  }

  return (
    <div className={styles.intro}>
      <span style={{ color: '#373FF8' }}>Dear</span>{' '}
      <span>
        {data?.user ? data.user.name : ' you'},<br />
        <span className={styles.para}>
          Welcome to our little slice of the web, where stories unfold and ideas
          flourish. You've found a sanctuary for thinkers, dreamers, and
          storytellers alike. From heartfelt musings to practical wisdom, your
          journey with us is one of discovery and connection.{' '}
          <span style={{ color: '#F1516C' }}>Why not explore... </span>
          <span style={{ color: '#F1516C' }}>
            <Typewriter />
          </span>
        </span>
      </span>
    </div>
  )
}

export default Intro
