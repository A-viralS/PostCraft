import React from 'react'
import styles from './blogPage.module.css'
import CardList from '@/components/cardList/CardList'
import Menu from '@/components/menu/Menu'
const page = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1
  const { cat } = searchParams
  return (
    <>
      <div className={styles.container}>
        <div
          className={styles.box}
          style={{
            width: 'full',
            height: '150px',
            backgroundColor: '#373FF9',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <h1 className={` ${styles.title}  `}>{cat} Blogs</h1>
        </div>
        <div className={styles.content}>
          <CardList page={page} cat={cat} />
          <Menu page={page} />
        </div>
      </div>
    </>
  )
}

export default page
