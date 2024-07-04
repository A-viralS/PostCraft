import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { nunito } from '@/utils/fonts'
const Card = ({ post, key }) => {
  // console.log('inside Card', post)

  return (
    <div className={styles.container} key={key}>
      <div className={styles.imgContainer}>
        {post.img && (
          <Image src={post.img} alt='p1image' fill className={styles.image} />
        )}
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>{post.createdAt.substring(0, 10)}</span>
          <Link
            href={`/blog?cat=${post.catSlug}`}
            className={`${styles.category}`}
          >
            {post.catSlug}
          </Link>
        </div>
        <Link href={`/posts/${post.slug}`} className={nunito}>
          <h1>{post.title}</h1>
        </Link>
        <p
          className={styles.desc}
          dangerouslySetInnerHTML={{ __html: post.desc.slice(0, 100) + '...' }}
        ></p>
        <p style={{ fontFamily: 'fantasy' }}>~{post.user.name}</p>
        <Link href={`/posts/${post.slug}`} className={styles.link}>
          Read more{' '}
        </Link>
      </div>
    </div>
  )
}

export default Card
