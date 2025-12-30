"use client";

import React from "react";
import styles from "./page.module.css";
import { useParams } from "next/navigation";
import Button from "@/components/Button/Button";
import Image from "next/image";

const Category = () => {
  const params = useParams();
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>desc</p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            alt="image contoh"
            src={
              "https://images.pexels.com/photos/32315717/pexels-photo-32315717.jpeg"
            }
            fill={true}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>test</h1>
          <p className={styles.desc}>desc</p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            className={styles.img}
            alt="image contoh"
            src={
              "https://images.pexels.com/photos/32315717/pexels-photo-32315717.jpeg"
            }
            fill={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
