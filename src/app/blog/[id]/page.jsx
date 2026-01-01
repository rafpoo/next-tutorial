import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import { notFound } from "next/navigation";

const getData = async (id) => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    notFound();
  }

  return res.json();
};

const BlogPost = async ({ params }) => {
  const { id } = await params; // 🔥 WAJIB di Next.js terbaru
  const data = await getData(id);
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>{data.title}</h1>
          <p className={styles.desc}>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Perspiciatis porro nobis dolore. Repudiandae earum ducimus fuga,
            minima ullam quia in. Enim cum et rerum maxime doloribus omnis,
            voluptate deserunt aperiam?
          </p>
          <div className={styles.author}>
            <Image
              alt=""
              src={
                "https://images.pexels.com/photos/32329293/pexels-photo-32329293.jpeg"
              }
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/13151566/pexels-photo-13151566.jpeg"
            }
            alt=""
            fill={true}
            className={styles.image}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero a,
          exercitationem molestias consequatur porro ullam rerum? Velit minus
          sed vel, dolores labore possimus, eos eaque iusto voluptate ea
          temporibus esse cumque? Expedita accusantium exercitationem quod
          omnis, quia suscipit repellendus fugiat facere quae eligendi dicta
          consectetur dolorem tempora perferendis eaque ipsum nostrum minus.
          Earum facilis at aperiam qui quisquam totam minus sed magni aut. Esse
          accusamus dicta exercitationem provident tempora, alias reprehenderit
          officiis nulla perspiciatis aliquam eligendi voluptatum dolores ex,
          nihil doloribus nisi quaerat? Rem a eligendi consequuntur cumque
          possimus ipsa vitae id nostrum alias, rerum at non perspiciatis sequi
          labore?
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
