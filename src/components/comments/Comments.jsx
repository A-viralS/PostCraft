'use client'
import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'
import useSWR from 'swr'
import { useSession } from 'next-auth/react'

const fetcher = async url => {
  const res = await fetch(url)
  const data = await res.json()
  if (!res.ok) {
    throw new Error(data.message)
  }
  return data
}
const Comments = ({ postSlug }) => {
  const { status } = useSession()
  const { data, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher
  )
  console.log('comments:', data?.desc, isLoading)
  return (
    <div className={styles.container}>
      <div className={styles.title}>Comments</div>
      {status === 'authenticated' ? (
        <div className={styles.write}>
          <textarea
            className={styles.input}
            placeholder='Write a comment'
          ></textarea>
        </div>
      ) : (
        <Link href='/login'>Please login to write comment</Link>
      )}
      <div className={styles.comments}>
        {isLoading
          ? 'loading'
          : data.map(item => (
              <div className={styles.comment} key={item._id}>
                <div className={styles.user}>
                  {item?.user?.image && (
                    <Image
                      src={item.user.image}
                      alt='user image'
                      width={50}
                      height={50}
                      className={styles.image}
                    />
                  )}
                  <div className={styles.userInfo}>
                    <span className={styles.username}>{item?.user?.name} </span>
                    <span className={styles.date}>
                      {item?.createdAt?.substring(0, 10)}
                    </span>
                  </div>
                </div>
                <p className={styles.desc}>{item?.desc}</p>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Comments
