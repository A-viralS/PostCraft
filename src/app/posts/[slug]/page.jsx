import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'

// const getData = async slug => {
//   try {
//     const res = await fetch(`http://localhost:3000/api/posts/${slug}`, {
//       cache: 'no-store'
//     })

//     if (!res.ok) {
//       console.error(`Error: ${res.status} ${res.statusText}`)
//       return null // Handle the error as needed
//     }

//     const data = await res.json() // Directly parse JSON
//     return data
//   } catch (error) {
//     console.error('Fetch error:', error)
//     return null // Handle the error as needed
//   }
// }

const Page = async ({ params }) => {
  const { slug } = params
  const post = await getData(slug)

  if (!post) {
    return <div>Error loading post</div> // Handle error case
  }

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
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
