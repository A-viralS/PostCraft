'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './authLinks.module.css'
import { signOut, useSession } from 'next-auth/react'

const AuthLinks = () => {
  const { data, status } = useSession()

  const [open, setOpen] = useState(false)

  return (
    <>
      {status === 'unauthenticated' ? (
        <div className={styles.box}>
          <Link href='/login' className={styles.link}>
            {' '}
            Login
          </Link>
        </div>
      ) : (
        <>
          <Link href='/write' className={`${styles.link} ${styles.box}`}>
            Write
          </Link>
          <span className={`${styles.link} ${styles.box}`} onClick={signOut}>
            Logout
          </span>
        </>
      )}
      <div className={styles.burger} onClick={() => setOpen(!open)}>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
      {open && (
        <div className={styles.responsiveMenu}>
          <Link href='/'>HomePage</Link>
          <Link href='/Contact'>Contact</Link>
          <Link href='/about'>About</Link>
          {status === 'unauthenticated' ? (
            <Link href='/login'> Login</Link>
          ) : (
            <>
              <Link href='/write'>Write</Link>
              <span className={styles.link} onClick={signOut}>
                Logout
              </span>
            </>
          )}
        </div>
      )}
    </>
  )
}

export default AuthLinks
