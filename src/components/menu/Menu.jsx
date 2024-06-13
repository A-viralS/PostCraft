import React from 'react'
import styles from './Menu.module.css'
import Link from 'next/link'
import Image from 'next/image'

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What&apos;s hot?!</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        <Link href='/menu/1' className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' className={styles.image} fill />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.travel}`}>
              Travel
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>- 11.04.24</span>
            </div>
          </div>
        </Link>
        <Link href='/menu/1' className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' className={styles.image} fill />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.coding}`}>
              coding
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>- 11.04.24</span>
            </div>
          </div>
        </Link>
        <Link href='/menu/1' className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' className={styles.image} fill />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.food}`}>food</span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>- 11.04.24</span>
            </div>
          </div>
        </Link>
        <Link href='/menu/1' className={styles.item}>
          <div className={styles.imageContainer}>
            <Image src='/p1.jpeg' className={styles.image} fill />
          </div>
          <div className={styles.textContainer}>
            <span className={`${styles.category} ${styles.fashion}`}>
              fashion
            </span>
            <h3 className={styles.postTitle}>Lorem ipsum dolor sit amet.</h3>
            <div className={styles.detail}>
              <span className={styles.username}>John Doe</span>
              <span className={styles.date}>- 11.04.24</span>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}

export default Menu
