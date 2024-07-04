// CatOptions.js
import React, { useState, useEffect } from 'react'
import styles from './CatOptions.module.css'

const getData = async () => {
  // const res = await fetch('http://localhost:3000/api/categories', {
  //   cache: 'no-store'
  // })
  const res= await fetch('https://post-craft.vercel.app/api/categories')
  if (!res.ok) {
    throw new Error('Something went wrong')
  }
  return res.json()
}

const CatOptions = async ({ setCatSlug }) => {
  const categories = await getData()


  return (
    <select
      className={styles.select}
      onChange={e => setCatSlug(e.target.value)}
    >
      {categories.map(category => (
        <option key={category.slug} value={category.slug}>
          {category.name}
        </option>
      ))}
    </select>
  )
}

export default CatOptions
