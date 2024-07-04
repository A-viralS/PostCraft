import React from 'react'
import styles from './CategoryList.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { nunito } from '@/utils/fonts'

const getData = async () => {
  const res = await fetch('https://post-craft.vercel.app/api/categories', {
    cache: 'no-store'
  })
  // const res = await fetch('http://localhost:3000/api/categories', {
  //   cache: 'no-store'
  // })
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
        <h1 className={`${styles.title} ${nunito}`}>
          Popular
          <span style={{ color: '#F1516C' }} className={nunito}>
            {' '}
            Categories
          </span>
        </h1>
        <div className={styles.categories}>
          {data?.map(item => (
            <Link
              href={`/blog?cat=${item.slug}`}
              className={`${styles.category}  ${styles[item.slug]} ${nunito}`}
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
