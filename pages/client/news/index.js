import React from "react";
import styles from "./styles.module.css";
import { Layout } from "../../../components/public/Layout";
import Link from "next/link";
import axios from "axios";
import Image from 'next/image'

export async function getServerSideProps() {
  //peticion a la api de noticias
  // let news = [
  //   {
  //     title: "subio bitcoin",
  //     description: "subio 5%",
  //     image: "https://estaticos-cdn.elperiodico.com/clip/5d0a3ba8-43db-4b2f-abc9-882d8344e5d5_alta-libre-aspect-ratio_default_0.jpg",
  //     link: "https://www.youtube.com/watch?v=Ijf4FI-hoQQ",
  //   },
  //   {
  //     title: "subio etherium",
  //     description: "subio 10%",
  //     image: "https://estaticos-cdn.elperiodico.com/clip/5d0a3ba8-43db-4b2f-abc9-882d8344e5d5_alta-libre-aspect-ratio_default_0.jpg",
  //     link: "https://www.youtube.com/watch?v=Ijf4FI-hoQQ",
  //   },
  // ];

  const res =  await fetch('https://670c-181-132-2-224.ngrok.io/news/consult')
  const news = await res.json()

  return {
    props: {
      news,
    },
  };
}

function index({ news }) {
  console.log(news)
  return (
    <Layout>
      <h1 className={styles.title}>News</h1>

      {news.message.map((n, index) => (
        <div key={index} className={styles.cover}>
          <Link href={n.link} key={index}>
            <a>
              <Image src={n.image}
              className={styles.img}
              alt="Picture of the author"
              width={190}
              height={250} />
              <b><p> {n.title} </p></b>
              <p> {n.description} </p>
            </a>
          </Link>
        </div>
      ))}
    </Layout>
  );
}

export default index;
