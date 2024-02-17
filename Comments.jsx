import React from 'react'
import styles from "./comments.module.css"
import Image from 'next/image';
import Link from 'next/link';

const Comments = () => {
    const status = "authenticated";
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Comments</h1>
        {status === "authenticated" ? (
          <div className={styles.write}>
            <textarea placeholder="write a comment....." className={styles.input}/>
            <button className={styles.button}>Send</button>
          </div>
        ) : (
                <Link href="/login">Login to write a comment</Link>
        )}
        <div className={styles.comments}>
            <div className={styles.comment}>
                <div className={styles.user}>
                    <Image src="/p1.jpeg" alt="" width={50} height={50} className={styles.image}/>
                    <div className={styles.userInfo}>
                        <span className={styles.username}>John Doe</span>
                        <span className={styles.date}>01.01.2024</span>
                    </div>
                </div>
                <p className={styles.desc}>
                Nice
                </p>
            </div>
        </div>
    </div>
  )
}

export default Comments
