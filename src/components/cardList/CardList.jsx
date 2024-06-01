import React from 'react'
import styles from './CardList.module.css'
import Pagination from '../pagination/Pagination'
import Menu from '../menu/Menu'
import Card from '../card/Card'
const CardList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}> Recent posts </div>
      <div className={styles.posts}>
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />

    </div>
  )
}

export default CardList
