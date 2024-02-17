import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
    return (
        <div className={styles.container}>
            <div className={styles.imageContainer}>
                <Image src="/p1.jpeg" alt="" fill className={styles.image} />
            </div>
            <div className={styles.textContainer}>
                <div className={styles.detail}>
                    <span className={styles.date}>11.02.2023</span>
                    <span className={styles.category}> -CULTURE</span>
                </div>
                <Link href="/">
                    <h1>India</h1>
                </Link>
                <p className={styles.desc}>
                    India is a country with diverse culture and heritage.
                    People are friendly and very warm. They teach your their
                    traditions and ethics. Especially I like the Indian Wear very
                    much.
                </p>
                <Link href="/" className={styles.link}>Read More</Link>
            </div>
        </div>
    )
}

export default Card
