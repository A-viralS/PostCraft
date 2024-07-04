// components/PostActions.js
'use client'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './singlePage.module.css'

const PostActions = ({ post, currUser }) => {
  const router = useRouter()

  const handleDelete = async () => {
    //     try {
    //       const res = await fetch(`http://localhost:3000/api/posts/${post.slug}`, {
    //         method: 'DELETE'
    //       })
    //       if (res.ok) {
    //         router.push('/')
    //       } else {
    //         console.error('Failed to delete post:', await res.json())
    //       }
    //     } catch (err) {
    //       console.error('An error occurred while deleting the post:', err)
    //     }
    //   }
    try {
      const res = await fetch(
        `https://post-craft.vercel.app/api/posts/${post.slug}`,
        {
          method: 'DELETE'
        }
      )
      if (res.ok) {
        router.push('/')
      } else {
        console.error('Failed to delete post:', await res.json())
      }
    } catch (err) {
      console.error('An error occurred while deleting the post:', err)
    }
  }

  return (
    <div className={styles.edit}>
      {post.user.email === currUser ? (
        <>
          <p className={styles.editText}> oh that`&apos;` your post!</p>
          <div className={styles.editButtons}>
            <Link href={`/edit/${post.slug}`} className={styles.box}>
              Edit
            </Link>
            <div className={styles.box} onClick={handleDelete}>
              Delete
            </div>
          </div>
        </>
      ) : null}
    </div>
  )
}

export default PostActions
