'use client'
import React from 'react'
import styles from './Login.module.css'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

const Login = () => {
  const { data, status } = useSession()
  const router = useRouter()
  if (status === 'authenticated') {
    router.push('/')
  }
  if (status === 'loading') {
    return <div className={styles.loading}>Loading...</div>
  }
  console.log(data, status)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div
          className={`${styles.socialButton} ${styles.box}`}
          onClick={() => signIn('google')}
        >
          GOOGLE
        </div>
        {/* <div className={`${styles.socialButton} ${styles.box}`}>GITHUB</div> */}
      </div>
    </div>
  )
}

export default Login
