import React from 'react'
import styles from './navbar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import ToggleButton from '../togglebutton/ToggleButton'
import AuthLinks from '../AuthLinks/AuthLinks'
const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.socials}>
        <Image src='/facebook.png' alt='facebook' width={20} height={20} />
        <Image src='/instagram.png' alt='instagram' width={20} height={20} />
        <Image src='/tiktok.png' alt='tiktok' width={20} height={20} />
        <Image src='/youtube.png' alt='youtube' width={20} height={20} />
      </div>
      <div className={styles.logo}>A-viralS</div>
      <div className={styles.links}>
        <ToggleButton />
        <Link href='/'>HomePage</Link>
        <Link href='/Contact'>Contact</Link>
        <Link href='/about'>About</Link>
        <AuthLinks />
      </div>
    </div>
  )
}

export default Navbar
