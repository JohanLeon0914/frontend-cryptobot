import React from "react";
import styles from "./styles.module.css";
import { Layout } from "../../../components/public/Layout";
import Link from "next/link";
import axios from "axios";
import Image from 'next/image'

export async function getServerSideProps() {

  const res =  await fetch(process.env.NEWS + '/news/consult')
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
