'use client'
import React from 'react'
import styles from './Login.module.css'
import { signIn, useSession } from 'next-auth/react'

const Login = () => {
  const { data, status } = useSession()
  console.log(data, status)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={() => signIn('google')}>
          GOOGLE
        </div>
        <div className={styles.socialButton}>GITHUB</div>
        <div className={styles.socialButton}>FACEBOOK</div>
      </div>
    </div>
  )
}

export default Login
