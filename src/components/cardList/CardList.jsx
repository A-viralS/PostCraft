import React from 'react'
import styles from './CardList.module.css'
import Pagination from '../pagination/Pagination'
import Menu from '../menu/Menu'
const CardList = () => {
  return (
    <div className={styles.container}>
      cardList
      <Pagination />
      <Menu />
    </div>
  )
}

export default CardList
