import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href={"/blog/testId"} className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            alt="image contoh"
            src={
              "https://images.pexels.com/photos/35051828/pexels-photo-35051828.jpeg"
            }
            width={400}
            height={250}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>
      <Link href={"/blog/testId"} className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            alt="image contoh"
            src={
              "https://images.pexels.com/photos/35051828/pexels-photo-35051828.jpeg"
            }
            width={400}
            height={250}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>
      <Link href={"/blog/testId"} className={styles.container}>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            alt="image contoh"
            src={
              "https://images.pexels.com/photos/35051828/pexels-photo-35051828.jpeg"
            }
            width={400}
            height={250}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>desc</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
