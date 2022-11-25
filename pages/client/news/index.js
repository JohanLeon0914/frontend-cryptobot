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
  //     image: "qwdqwd",
  //     link: "https://www.youtube.com/watch?v=Ijf4FI-hoQQ",
  //   },
  //   {
  //     title: "subio etherium",
  //     description: "subio 10%",
  //     image: "dqwd",
  //     link: "https://www.youtube.com/watch?v=Ijf4FI-hoQQ",
  //   },
  // ];

  const res =  await fetch('https://69c9-181-132-2-224.ngrok.io/news/consult')
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
              <Image src={news.image}
              alt="Picture of the author"
              width={500}
              height={500} />
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
