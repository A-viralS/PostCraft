'use client'
import React from 'react'
import styles from './Pagination.module.css'
import { useRouter } from 'next/navigation'

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter()

  const handlNext = () => {
    router.push(`?page=${page + 1}`)
  }
  const handlePrev = () => {
    router.push(`?page=${page - 1}`)
  }
  return (
    <div className={styles.container}>
      <button
        className={styles.button}
        disabled={!hasPrev}
        onClick={handlePrev}
      >
        Previous
      </button>
      <button
       disabled={!hasNext} 
       className={styles.button} 
       onClick={handlNext}>
        Next
      </button>
    </div>
  )
}

export default Pagination
