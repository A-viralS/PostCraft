import React from 'react'
import styles from './comments.module.css'
import Link from 'next/link'
import Image from 'next/image'
const Comments = () => {
  const status = 'authenticated'
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
        <div className={styles.comment}>
          <div className={styles.user}>
            <Image
              src='/p1.jpeg'
              alt='placeholder'
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}>John wick </span>
              <span className={styles.date}>16.09.23</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore
            obcaecati nulla, doloremque laborum temporibus perferendis vel
            magnam distinctio dolorem corporis!
          </p> 
        </div>
      </div>
    </div>
  )
}

export default Comments
