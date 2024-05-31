import Link from 'next/link'
import React from 'react'
import styles from './AuthLinks.module.css'

const AuthLinks = () => {
  const status = 'unauthenticated'
  return(
  <>
    {status === 'unauthenticated' ? (
      <Link href='/login'> Login</Link>
    ) : (
      <>
        <Link href='/write'>Write</Link>
        <span className={styles.link}>Logout</span>
      </>
    )}
  </>
  )
}

export default AuthLinks
