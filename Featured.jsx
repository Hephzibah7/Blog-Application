import React from 'react'
import styles from "./featured.module.css"
import Image
 from 'next/image'
const Featured = () => {
  return (
    <div className={styles.container}>
     <h1 className={styles.title}>
        <b>Hey, Hephziii here! </b>
        Discover my stories and creative ideas.
     </h1>
     <div className={styles.post}>
        <div className={styles.imgContainer}>
          <Image src="/p1.jpeg" alt="" fill/>
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.postTitle}>Odisha</h1>
          <p className={styles.postDesc}>
              Odisha is a beautiful place with full of pilgrims. It is a tourist place where 
              everone they visit to relive the ancient vibes.
          </p>
          <button className={styles.button}>Read More</button>
        </div>
     </div>
    </div>
  )
}

export default Featured