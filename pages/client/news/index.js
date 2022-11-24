import React from 'react'
import styles from './styles.module.css'
import { Layout } from '../../../components/public/Layout'

export async function getServerSideProps() {

    //peticion a la api de noticias
    let news = {
        title: 'subio bitcoint',
        description: 'hoy subio un 10% el bitcoin',
        image: 'https://www.criptonoticias.com/wp-content/uploads/2022/10/bitcoin-latinoamerica-adopcion-1140x570.jpg'
       }
    
    return {
        props: {
            news
        }
    }
}

function index({ news }) {
  return (
    <Layout className={styles.cover}>
        <h1 className={styles.title}>News</h1>
        
        
    </Layout>
  )
}

export default index
