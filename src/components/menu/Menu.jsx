import React from 'react'
import styles from './Menu.module.css'
import Link from 'next/link'
import Image from 'next/image'

const getData = async () => {
  const res = await fetch('https://post-craft.vercel.app/api/categories', {
    cache: 'no-store'
  })
  // const res = await fetch('http://localhost:3000/api/menu', {
  //   cache: 'no-store'
  // })
  if (!res.ok) {
    throw new Error('Something went wrong ')
  }
  return res.json()
}

const Menu = async ({ page }) => {
  const posts = await getData()
  console.log('posts in menu:', posts)
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>What&apos;s hot?!</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <div className={styles.items}>
        {posts?.map(post => (
          <Link href={`/posts/${post.slug}`} className={styles.item}>
            <div className={styles.imageContainer} key={post._id}>
              <Image src={post?.img} className={styles.image} fill />
            </div>
            <div className={styles.textContainer}>
              <Link
                href={`/blog?cat=${post.catSlug}`}
                className={`${styles.category} ${styles[post.catSlug]}`}
              >
                {post.catSlug}
              </Link>
              <h3 className={styles.postTitle}>{post.title}</h3>
              <div className={styles.detail}>
                <span className={styles.username}>{post?.user?.name}</span>
                <br />
                <span className={styles.date}>
                  {`${post.createdAt}`.substring(0, 10)}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Menu
