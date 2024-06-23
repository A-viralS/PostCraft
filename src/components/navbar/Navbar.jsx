'use client'
import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ToggleButton from '../togglebutton/ToggleButton'
import AuthLinks from '../AuthLinks/AuthLinks'
import { signOut, useSession } from 'next-auth/react'
import { Nunito } from 'next/font/google'
import { nunito } from '@/utils/fonts'
const Navbar = () => {
  const { data, status } = useSession()

  if (status === 'authenticated' && data?.user) {
    console.log('sessionData:', data.user.name)
  } else {
    console.log('No user is authenticated')
  }

  return (
    <div className={styles.box}>
      <div className={styles.container}>
        <Link href='/'>
          <div className={`${nunito} ${styles.logo}`}>Postcraft</div>
        </Link>
        <div>
          <div className={styles.links}>
            <ToggleButton />

            <AuthLinks />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
