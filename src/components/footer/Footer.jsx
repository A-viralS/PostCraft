import React from 'react'
import styles from './footer.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { nunito } from '@/utils/fonts'

const Footer = () => {
  return (
    <div className={`${styles.box_bottom} ${nunito}`}>
      <div className={styles.container}>
        <div className={styles.info}>
          <div className={styles.logo}>
            <Image src='/logo.png' alt='logo' width={100} height={100} />
            <h1 className={`${styles.logotext} `} style={{ color: '#F1516C' }}>
              PostCraft
            </h1>
          </div>
          <p className={styles.desc}>
            Welcome to PostCraft! 🌟 Dive into the world of technology with us,
            where we explore, innovate, and share insights that matter to
            college students. Join our vibrant community, stay curious, stay
            inspired, and let's build the future together!
          </p>
        </div>
        <div className={styles.links}>
          <div className={styles.list}>
            <span className={styles.listTitle}>Links</span>
            <Link href='/' className={styles.listItem}>
              Homepage
            </Link>
            <Link href='/' className={styles.listItem}>
              Blog
            </Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Tags</span>
            <Link href='/blog?cat=openSource' className={styles.listItem}>
              Open Source
            </Link>
            <Link href='/blog?cat=AIML' className={styles.listItem}>
              AI/ML
            </Link>
            <Link href='/blog?cat=startUps' className={styles.listItem}>
              StartUps
            </Link>
            <Link href='/blog?cat=collegeLife' className={styles.listItem}>
              College{' '}
            </Link>
            <Link href='/blog?cat=placements' className={styles.listItem}>
              Placements
            </Link>
            <Link href='/blog?cat=interviews' className={styles.listItem}>
              Interviews
            </Link>
          </div>
          <div className={styles.list}>
            <span className={styles.listTitle}>Social</span>
            <Link
              href='https://www.linkedin.com/in/a-virals/'
              style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Image src={'/linkedin.png'} width={20} height={20}></Image>
              LinkedIn
            </Link>
            <Link
              href='/https://www.instagram.com/joe.aviral?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='
              style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
            >
              <Image src={'/instagram.png'} width={20} height={20}></Image>
              Instagram
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
