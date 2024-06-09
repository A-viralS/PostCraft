import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'
const getData = async slug => {
  try {
    const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
      cache: 'no-store'
    })

    // Check if the response is ok (status is in the range 200-299)
    if (!res.ok) {
      console.error(`Error: ${res.status} ${res.statusText}`)
      // Return an empty array or handle the error as needed
    }

    const data = await res.text() // Read the response as text

    // Try to parse the JSON
    try {
      return JSON.parse(data)
    } catch (error) {
      console.error('Failed to parse JSON:', error)
      console.error('Response data:', data)
      return error // Return an empty array or handle the error as needed
    }
  } catch (error) {
    console.error('Fetch error:', error)
    return error // Return an empty array or handle the error as neededa
  }
}
const page = async ({ params }) => {
  const { slug } = params
  const post = await getData(slug)
  console.log('post in single page:', post)
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post?.title}</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              {post.user.image && (
                <Image
                  src={  post.user.image}
                  alt='placeholder'
                  fill
                  className={styles.image}
                />
              )}
            </div>
            <div className={styles.userTextContainer}>
              <span>{post.user.name}</span>
              <span>{post.createdAt.substring(0, 10)}</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          {post.img && (
            <Image
              src={'/' + post?.img}
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
            dangerouslySetInnerHTML={{ __html: post?.desc }}
          ></div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>

        <Menu />
      </div>
    </div>
  )
}

export default page
