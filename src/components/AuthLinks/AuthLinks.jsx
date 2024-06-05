'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './AuthLinks.module.css'
import { signOut, useSession } from 'next-auth/react'

const AuthLinks = () => {
  const { data, status } = useSession()

  const [open, setOpen] = useState(false)

  return (
    <>
      {status === 'unauthenticated' ? (
        <Link href='/login' className={styles.link}>
          {' '}
          Login
        </Link>
      ) : (
        <>
          <Link href='/write' className={styles.link}>
            Write
          </Link>
          <span className={styles.link} onClick={signOut}>
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
