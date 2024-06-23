import React from 'react'
import styles from './Featured.module.css'
import Image from 'next/image'
import Link from 'next/link'
import Intro from '../intro/Intro'
import { nunito } from '@/utils/fonts'

const getData = async () => {
  const res = await fetch('https://post-craft.vercel.app/api/featured', {
    cache: 'no-store'
  })
  // const res = await fetch('http://localhost:3000/api/featured', {
  //   cache: 'no-store'
  // })
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}
const Featured = async () => {
  const posts = await getData()
  // console.log('post in feartured:', posts)
  return (
    <>
      <div>
        <div className={styles.container} style={{ margin: '0px' }}>
          <h1 className={`${styles.title} ${nunito}`}>
            Hello{' '}
            <span style={{ display: 'inline', color: '#F1516C' }}>
              <Intro />
            </span>
            ! What&apos;s on your
            <span> </span>
            <p style={{ display: 'inline', color: '#F1516C' }}>mind today?</p>
          </h1>

          {posts.map(post => (
            <div
              className={`${styles.post} ${styles.box_top_bottom}`}
              key={post}
            >
              <div className={`${styles.featured} ${styles.box_bottom}`}>
                <p>Featured</p>
              </div>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '120px'
                }}
                className={styles.outerbox}
              >
                <div className={styles.imgContainer}>
                  <Image
                    src={post.img}
                    alt='p1image'
                    fill
                    layout='fill'
                    className={styles.image}
                  />
                </div>

                <div className={styles.textContainer}>
                  <h1 className={`${styles.postTitle} ${nunito}`}>
                    {post.title}
                  </h1>

                  <div
                    dangerouslySetInnerHTML={{
                      __html: post.desc.slice(0, 100) + '...'
                    }}
                    style={{
                      fontFamily: 'monospace',
                      fontWeight: '900',
                      fontSize: '1rem'
                    }}
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
