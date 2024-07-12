'use client'
import { useSession } from 'next-auth/react'
import React from 'react'
import styles from './intro.module.css'
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
      <div className={styles.greeting}>
        <span style={{ color: '#373FF8' }} {...nunito}>
          Dear
        </span>{' '}
        <span style={{ color: '#F1516C' }}>
          {' '}
          {data?.user ? data.user.name : ' you'},<br />
        </span>
        <span className={styles.para}>
          Welcome to our little slice of the web, where stories unfold and ideas
          flourish. You've found a sanctuary for thinkers, dreamers, and
          storytellers alike. From heartfelt musings to practical wisdom, your
          journey with us is one of discovery and connection.
        </span>
      </div>
      <div className={styles.ques}>
        <span style={{ color: '#F1516C' }} {...nunito}>
          <span style={{ color: '#373FF8' }}>Uncertain what to share?</span> Why
          not explore...{' '}
        </span>
        <span style={{ color: '#F1516C' }} {...nunito}>
          <Typewriter />
        </span>
      </div>
    </div>
  )
}

export default Intro
