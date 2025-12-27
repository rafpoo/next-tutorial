import Image from "next/image";
import styles from "./page.module.css";
import Hero from "@/../public/hero.png";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Halooo saat ini saya gabut.</h1>
        <p className={styles.desc}>Pengen Tian Mimi deh</p>
        <button className={styles.button}>See our works</button>
      </div>
      <div className={styles.item}>
        <Image src={Hero} alt="Hero Image" className={styles.img} />
      </div>
    </div>
  );
}
