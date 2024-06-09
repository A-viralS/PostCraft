import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Card = ({ post, key }) => {
  console.log('inside Card', post.title)

  return (
    <div className={styles.container} key={key}>
      <div className={styles.imgContainer}>
        {post.img && (
          <Image
            src={'/' + post.img}
            alt='p1image'
            fill
            className={styles.image}
          />
        )}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{post.createdAt.substring(0, 10)}</span>
          <span className={`${styles.category}`}>{post.catSlug}</span>
        </div>
        <Link href={`/posts/${post.slug}`}>
          <h1>{post.title}</h1>
        </Link>
        <p className={styles.desc}>{post.desc}</p>
        <Link href={`/posts/${post.slug}`} className={styles.link}>
          Read more{' '}
        </Link>
      </div>
    </div>
  )
}

export default Card
