import React from 'react'
import styles from './qa.module.css'

export default function QAComponent({ qa }) {
  return (
    <>
      <h1 className={styles.title}>Q&A</h1>
      {
        qa.qa.map((QA, index) => (
          <div key={index} className={styles.cover}>
            <p> {QA.question} </p>
            <hr className={styles.line} />
            <p> {QA.answer} </p>
          </div>
        ))
      }
    </>
  )
}
