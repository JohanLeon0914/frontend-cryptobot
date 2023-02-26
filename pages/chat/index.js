import Head from "next/head";
import { useState } from "react";
import styles from "./index.module.css";
import {Layout} from '../../components/public/Layout'
import Image from 'next/image'

export default function Home() {
  const [questionInput, setQuestionInput] = useState("");
  const [result, setResult] = useState();

  async function onSubmit(event) {
    event.preventDefault();
    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question: questionInput }),
      });

      const data = await response.json();
      if (response.status !== 200) {
        throw data.error || new Error(`Request failed with status ${response.status}`);
      }

      setResult(data.result);
      setQuestionInput("");
    } catch(error) {
      // Consider implementing your own error handling logic here
      console.error(error);
      alert(error.message);
    }
  }

  return (
    <Layout>
      <Head>
        <title>OpenAI</title>
      </Head>

      <main className={styles.main}>
        <h1>CryptoBot</h1>
      <Image className={styles.imagen} src='/images/cryptobot.png' width={300} height={300} alt='cryptobot' />
        <h3>write your question</h3>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            name="question"
            placeholder="Enter a question"
            value={questionInput}
            onChange={(e) => setQuestionInput(e.target.value)}
          />
          <input type="submit" value="Generate response" />
        </form>
        <div className={styles.result}>
          Response
          <hr />
          {result}
        </div>
      </main>
    </Layout>
  );
}
