import React from 'react'
import styles from './Featured.module.css'
import Image from 'next/image'
const Featured = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        <b>Hey its Aviral here! Good to see you. </b>
      </h1>

      <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src='/p1.jpeg' alt='p1image' fill className={styles.image} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum
            expedita porro ab illum error.
          </h1>
          <p className={styles.postDesc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est ipsum
            praesentium, dicta facere, impedit vitae enim aperiam nesciunt sequi
            quae perspiciatis saepe? Reiciendis dicta aspernatur dolor, id
            itaque autem perspiciatis aliquid esse animi incidunt facere
            provident. Earum asperiores fugiat aliquam, ducimus libero a iste ad
            sequi quidem id esse labore.
          </p>
          <button className={styles.button}>Read More </button>
        </div>
      </div>
    </div>
  )
}

export default Featured
