'use client'
import React from 'react'
import styles from './Pagination.module.css'
import { useRouter } from 'next/navigation'

const Pagination = ({ page, hasPrev, hasNext }) => {
  const router = useRouter()

  const handleNext = () => {
    router.push(`?page=${page + 1}`)
  }
  const handlePrev = () => {
    router.push(`?page=${page - 1}`)
  }
  return (
    <div className={styles.container}>
      <div
        className={`${styles.button} ${styles.box}`}
        disabled={!hasPrev}
        onClick={handlePrev}
      >
        Previous
      </div>
      <div
        disabled={!hasNext}
        className={`${styles.button} ${styles.box}`}
        onClick={handleNext}
      >
        Next
      </div>
    </div>
  )
}

export default Pagination
