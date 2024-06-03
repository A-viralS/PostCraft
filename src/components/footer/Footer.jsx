import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <div className={styles.logo}>
          <Image src='/logo.png' alt='logo' width={100} height={100} />
          <h1 className={styles.logotext}>PostCraft</h1>
        </div>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          dolorem non rem enim amet sequi, ipsam aperiam facilis, ullam quos
          laudantium neque suscipit quis molestias est illum exercitationem,
          voluptatem eveniet omnis? Architecto earum deserunt numquam
          laboriosam, ab quasi consectetur consequuntur?
        </p>
        <div className={styles.icons}>
          <Image src='/facebook.png' alt='facebook' width={30} height={30} />
          <Image src='/instagram.png' alt='instagram' width={30} height={30} />
          <Image src='/tiktok.png' alt='twitter' width={30} height={30} />
          <Image src='/youtube.png' alt='youtube' width={30} height={30} />
        </div>
      </div>
      <div className={styles.links}>
        <div className={styles.list}>
          <span className={styles.listTitle}>Links</span>
          <Link href='/'>Homepage</Link>
          <Link href='/'>Blog</Link>
          <Link href='/'>About</Link>
          <Link href='/'>Contact</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Tags</span>
          <Link href='/'>Styles</Link>
          <Link href='/'>Fashion</Link>
          <Link href='/'>Coding</Link>
          <Link href='/'>Travel</Link>
        </div>
        <div className={styles.list}>
          <span className={styles.listTitle}>Social</span>
          <Link href='/'>Instagram</Link>
          <Link href='/'>Facebook</Link>
          <Link href='/'>Twitter</Link>
          <Link href='/'>Youtube</Link>
        </div>
      </div>
    </div>
  )
}

export default Footer
