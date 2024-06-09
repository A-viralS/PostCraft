import React from 'react'
import styles from './CardList.module.css'
import Pagination from '../pagination/Pagination'
import Menu from '../menu/Menu'
import Card from '../card/Card'
const getData = async (page, cat) => {
  try {
    const res = await fetch(
      `http://localhost:3000/api/posts?page=${page}&cat=${cat || ''}`,
      {
        cache: 'no-store'
      }
    )

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

const CardList = async ({ page, cat }) => {
  const { posts, count } = await getData(page, cat)
  const POSTS_PER_PAGE = 2
  console.log('posts:', posts, count)
  const hasNext = POSTS_PER_PAGE * page < count
  const hasPrev = POSTS_PER_PAGE * (page - 1) > 0
  return (
    <div className={styles.container}>
      <div className={styles.title}> Recent posts </div>
      <div className={styles.posts}>
        {posts?.length > 0 ? (
          posts.map(post => <Card  key={post._id} post={post} />)
        ) : (
          <div>No posts available</div>
        )}
      </div>
      <Pagination page={page} hasNext={hasNext} hasPrev={hasPrev} />
    </div>
  )
}

export default CardList
