import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/Button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/35130806/pexels-photo-35130806.jpeg"
          fill={true}
          alt=""
          className={styles.img}
        />

        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Computer science undergraduate</h1>
          <h2 className={styles.imgDesc}>Full-stack developer</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>About Me</h1>
          <p className={styles.desc}>
            Informatics undergraduate specializing in full-stack and mobile
            development. Experienced in building scalable web and Android
            applications using React, Node.js, and Kotlin. Proven team leader
            with experience delivering production systems used by 2,000+ users,
            implementing clean architecture, CI/CD, and cloud deployment.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>My Works</h1>
          <p className={styles.desc}>
            A collection of projects showcasing my experience in full-stack and
            mobile development. These works include web and Android applications
            built with modern technologies such as React, Next.js, Node.js, and
            Kotlin. Each project focuses on clean architecture, performance, and
            real-world usability, reflecting my ability to solve problems and
            deliver scalable, production-ready solutions.
            <br />
            <br /> - MAXIMA 2025
            <br />
            <br /> - MEDEASE
          </p>
          <Button url="contact" text="Contact" />
        </div>
      </div>
    </div>
  );
};

export default About;
