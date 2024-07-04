import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '@/utils/auth'
import { nunito } from '@/utils/fonts'
import PostActions from '@/components/PostActions/postActions'

const getData = async slug => {
  try {
    // const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
    //   cache: 'no-store'
    // })
    const res = await fetch(`https://post-craft.vercel.app/api/posts/${slug}`, {
      cache: 'no-store'
    })

    if (!res.ok) {
      console.error(`Error: ${res.status} ${res.statusText}`)
      return null
    }

    const data = await res.json()
    return data
  } catch (error) {
    console.error('Fetch error:', error)
    return null
  }
}

const Page = async ({ params }) => {
  const session = await getServerSession(authOptions)
  const { slug } = params
  const post = await getData(slug)

  if (!post) {
    return <div>Error loading post</div>
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={`${styles.title} ${nunito}`}>{post.title}</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              {post.user?.image && (
                <Image
                  src={post.user.image}
                  alt='placeholder'
                  fill
                  className={styles.image}
                />
              )}
            </div>
            <div className={styles.userTextContainer}>
              <span>{post.user?.name}</span>
              <span>{post.createdAt.substring(0, 10)}</span>
            </div>
          </div>
          <PostActions post={post} currUser={session?.user.email} />
        </div>
        <div className={styles.imageContainer}>
          {post.img && (
            <Image
              src={post.img}
              alt='placeholder'
              fill
              className={styles.image}
            />
          )}
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: post.desc }}
          ></div>
          <div className={styles.comment}>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  )
}

export default Page
