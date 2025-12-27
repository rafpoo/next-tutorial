import React from "react";
import styles from "./footer.module.css";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>Copyright Rafpo 2025. All rights reserved</div>
      <div className={styles.socials}>
        <Image
          className={styles.icon}
          src="/1.png"
          alt="Full of Joy FB"
          width={15}
          height={15}
        />
        <Image
          className={styles.icon}
          src="/2.png"
          alt="Full of Joy IG"
          width={15}
          height={15}
        />
        <Image
          className={styles.icon}
          src="/3.png"
          alt="Full of Joy TW"
          width={15}
          height={15}
        />
        <Image
          className={styles.icon}
          src="/4.png"
          alt="Full of Joy YT"
          width={15}
          height={15}
        />
      </div>
    </div>
  );
};

export default Footer;
