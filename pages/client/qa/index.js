import axios from 'axios'
import React, { useState } from 'react'
import { Layout } from '../../../components/public/Layout'
import QAComponent from '../../../components/client/qa/qa'

export async function getServerSideProps({ params }){

  const res =  await fetch('https://run.mocky.io/v3/b9f47444-1f89-4198-aca3-e5e0c416d5d9')
  const qa = await res.json()

  return {
    props: {
      qa
    }
  }
}


export default function Index({ qa }) {

  return (
    <Layout>
      <QAComponent qa={qa} />
    </Layout>
  )
}