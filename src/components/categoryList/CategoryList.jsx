import React from 'react'
import styles from './CategoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'
const CategoryList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h1> Popular Categories</h1>
        <div className={styles.categories}>
          <Link
            href='/blog?cat=style'
            className={`${styles.category} ${styles.style}`}
          >
            <Image
              src='/style.png'
              alt='style'
              width={32}
              height={32}
              className={styles.image}
            />
            Style
          </Link>
          <Link
            href='/blog?cat=coding'
            className={`${styles.category} ${styles.coding}`}
          >
            <Image
              src='/coding.png'
              alt='coding'
              width={32}
              height={32}
              className={styles.image}
            />
            Coding
          </Link>{' '}
          <Link
            href='/blog?cat=culture'
            className={`${styles.category} ${styles.culture}`}
          >
            <Image
              src='/culture.png'
              alt='culture'
              width={32}
              height={32}
              className={styles.image}
            />
            Culture
          </Link>{' '}
          <Link
            href='/blog?cat=travel'
            className={`${styles.category} ${styles.travel}`}
          >
            <Image
              src='/travel.png'
              alt='travel'
              width={32}
              height={32}
              className={styles.image}
            />
            Travel
          </Link>{' '}
          <Link
            href='/blog?cat=food'
            className={`${styles.category} ${styles.style}`}
          >
            <Image
              src='/food.png'
              alt='food'
              width={32}
              height={32}
              className={styles.image}
            />
            Food
          </Link>{' '}
          <Link
            href='/blog?cat=fashion'
            className={`${styles.category} ${styles.fashion}`}
          >
            <Image
              src='/fashion.png'
              alt='fashion'
              width={32}
              height={32}
              className={styles.image}
            />
            Fashion
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CategoryList