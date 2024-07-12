'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import styles from './authLinks.module.css'
import { signOut, useSession } from 'next-auth/react'

const AuthLinks = () => {
  const { data, status } = useSession()

  // const [open, setOpen] = useState(false)

  return (
    <>
      <div className={styles.outerBox}>
        {status === 'unauthenticated' ? (
          <>
            <div className={styles.unAuthButtons}>
              <Link href='/login' className={styles.link}>
                <div className={styles.box}> Login to write</div>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div style={{ display: 'flex ', gap: '10px' }}>
              <Link href='/write' className={`${styles.link} ${styles.box}`}>
                Write
              </Link>
              <span
                className={`${styles.link} ${styles.box}`}
                onClick={signOut}
              >
                Logout
              </span>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default AuthLinks
