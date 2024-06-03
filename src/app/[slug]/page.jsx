import React from 'react'
import styles from './singlePage.module.css'
import Menu from '@/components/menu/Menu'
import Image from 'next/image'
import Comments from '@/components/comments/Comments'
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>Lorem ipsum dolor sit amet.</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                src='/p1.jpeg'
                alt='placeholder'
                fill
                className={styles.image}
              />
            </div>
            <div className={styles.userTextContainer}>
              <span>John doe</span>
              <span>11.01.24</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src='/p1.jpeg'
            alt='placeholder'
            fill
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.description}>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
              eos quam exercitationem corporis est, eaque inventore quae
              corrupti nulla debitis omnis architecto maxime distinctio
              voluptate doloribus minima tempora voluptates eum delectus fugiat
              nesciunt error sunt, aliquid a. Accusantium, error in perferendis
              alias quasi dicta veritatis? Assumenda blanditiis fugit sapiente
              magnam excepturi voluptatibus mollitia reprehenderit, unde vitae,
              voluptas dignissimos, optio harum.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit velit
              facilis neque dolor, quae libero vero qui iste odit distinctio ad
              necessitatibus voluptatem accusantium! Animi commodi minus
              reprehenderit quia nisi voluptate voluptatem? Illo nesciunt ab
              deserunt, asperiores doloribus molestiae perferendis reiciendis
              facere! Architecto nesciunt consequatur est itaque, ad facilis
              rerum.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>

        <Menu />
      </div>
    </div>
  )
}

export default page
