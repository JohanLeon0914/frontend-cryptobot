import { useRouter } from 'next/router'
import React from 'react'
import styles from './ConsultQA.module.css'
import Swal from 'sweetalert2'

export default function ConsultQA({ qa }) {
    const router = useRouter()
    const confirmDelete = (qaDelet) => {
        Swal.fire({
            title: 'Do you want to delete the Q&A?',
            showCancelButton: true,
            confirmButtonText: 'Delete',
            denyButtonText: `Don't Delete`,
          }).then((result) => {
            if (result.isConfirmed) {
                router.push(`/admin/qa/edit-qa/${qaDelet.id}`)
            } else if (result.isDenied) {
              Swal.fire('Q&A are not deleted')
            }
          })
    }
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
                            onClick={() => confirmDelete(QA)}>
                            Delete
                        </button>
                    </div>
                ))
            }
            
        </div>
    )
}

