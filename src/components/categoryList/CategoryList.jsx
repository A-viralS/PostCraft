import React from 'react'
import styles from './CategoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'

const getData = async () => {
  const res = await fetch('https://post-craft.vercel.app/api/categories', {
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error('Something went wrong ')
  }
  return res.json()
}
const CategoryList = async () => {
  const data = await getData()

  return (
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}> Popular Categories</h1>
        <div className={styles.categories}>
          {data?.map(item => (
            <Link
              href='/blog?cat=style'
              className={`${styles.category} ${styles[item.slug]}`}
              key={item._id}
            >
              {item.img && (
                <Image
                  src={'/' + item.img}
                  alt='style'
                  width={32}
                  height={32}
                  className={styles.image}
                />
              )}
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default CategoryList
