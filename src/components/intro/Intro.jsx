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
        <span className={styles.dearYou}>
          <span style={{ color: '#373FF8' }} {...nunito}>
            Dear
          </span>{' '}
          <span style={{ color: '#F1516C' }}>
            {' '}
            {data?.user ? data.user.name : ' you'},<br />
          </span>
        </span>
        <span className={styles.para}>
          Welcome to our little slice of the web, where stories unfold and ideas
          flourish. You&apos;ve found a sanctuary for thinkers, dreamers, and
          storytellers alike. From heartfelt musings to practical wisdom, your
          journey with us is one of discovery and connection.
        </span>
      </div>
      <div className={styles.ques}>
        <span style={{ color: '#F1516C' }} {...nunito}>
          <span style={{ color: '#373FF8' }} className={styles.questions}>
            {' '}
            Uncertain what to share?
          </span>{' '}
          Why not explore...{' '}
        </span>
      </div>
      <span
        style={{ color: '#F1516C' }}
        {...nunito}
        className={styles.Typewriter}
      >
        <Typewriter />
      </span>
    </div>
  )
}

export default Intro
