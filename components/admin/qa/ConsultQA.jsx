import { useRouter } from 'next/router'
import React from 'react'
import styles from './ConsultQA.module.css'

export default function ConsultQA({ qa }) {
    const router = useRouter()
    return (
        <div>
            <h1 className={styles.title}>Q&A</h1>
            <button className={styles.createButton}
                onClick={() => router.push('/admin/qa/create-qa')}>
                Create
            </button>
            {
                qa.map((QA, index) => (
                    <div key={index} className={styles.cover}>
                        <p> {QA.question} </p>
                        <hr className={styles.line} />
                        <p> {QA.answer} </p>
                        <button className={styles.editButton}
                            onClick={() => router.push(`/admin/qa/edit-qa/${QA.id}`)}>
                            Edit
                        </button>
                        <button
                            className={styles.deleteButton}
                            onClick={() => router.push(`/admin/qa/delete-qa/${QA.id}`)}>
                            Delete
                        </button>
                    </div>
                ))
            }
            
        </div>
    )
}

