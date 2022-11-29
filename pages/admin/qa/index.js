import axios from 'axios'
import React, { useState } from 'react'
import { Layout } from '../../../components/public/Layout'
import QAComponent from '../../../components/admin/qa/ConsultQA'

export async function getServerSideProps({ params }){

  const res =  await fetch(process.env.QA + '/qa/consult')
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