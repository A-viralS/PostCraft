import React from 'react'
import styles from './Featured.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Intro from '../intro/Intro'
import { nunito } from '@/utils/fonts'

const getData = async () => {
  // const res = await fetch('http://localhost:3000/api/featured', {
  //   cache: 'no-store'
  // })
  const res = await fetch('https://post-craft.vercel.app/api/featured', {
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}

const Featured = async () => {
  const posts = await getData()
  return (
    <>
      <div>
        <div className={styles.container} style={{ margin: '0px' }}>
          <div>
            <p
              className={`${styles.greeting} ${nunito} `}
              style={{ fontSize: '50px' }}
            >
              <span style={{ color: '#F1516C' }}>
                <Intro />
              </span>
            </p>
          </div>

          {posts.map(post => (
            <div
              className={`${styles.post} ${styles.box_top_bottom}`}
              key={post._id}
            >
              <div className={`${styles.featured} ${styles.box_bottom}`}>
                <p className={styles.featuredText}>Featured</p>
              </div>
              <div className={styles.mobile}>
                <div className={styles.imgContainer}>
                  <Image
                    src={post.img}
                    alt='p1image'
                    layout='fill'
                    className={styles.image}
                  />
                </div>

                <div className={styles.textContainer}>
                  <Link
                    href={`/posts/${post.slug}`}
                    className={`${styles.postTitle} ${nunito}`}
                  >
                    {post.title}
                  </Link>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.desc.slice(0, 100) + '...'
                    }}
                    style={{
                      fontFamily: 'monospace',
                      fontWeight: '900',
                      fontSize: '1rem'
                    }}
                    className={styles.postDesc}
                  ></div>

                  <span className={styles.user}> - {post.user.name}</span>
                  <div className={styles.link}>
                    <Link
                      href={`/posts/${post.slug}`}
                      className={styles.button}
                    >
                      Read More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Featured
