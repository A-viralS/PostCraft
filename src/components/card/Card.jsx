import React from 'react'
import styles from './Card.module.css'
import Image from 'next/image'
import Link from 'next/link'
const Card = ({ post, key }) => {
  console.log('inside Card', post.title)

  return (
    <div className={styles.container} key={key}>
      <div className={styles.imgContainer}>
        <Image src='/p1.jpeg' alt='p1image' fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>11.07.24</span>
          <span className={`${styles.category} mr-9`}>Travel</span>
        </div>
        <Link href='/'>
          <h1>{post.title}</h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
          recusandae sed. Vel fugiat at soluta veritatis quibusdam architecto ex
          in ab maiores nesciunt aut, maxime, nulla ipsum asperiores. Qui, quos.
        </p>
        <Link href='/' className={styles.link}>
          Read more{' '}
        </Link>
      </div>
    </div>
  )
}

export default Card
