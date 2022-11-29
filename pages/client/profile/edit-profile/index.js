import { useRouter } from 'next/router'
import React from 'react'
import EditProfile from '../../../../components/client/profile/EditProfile'
import { Layout } from '../../../../components/public/Layout'

export async function getServerSideProps(context) {
  
  const {id} = context.query
  const res =  await fetch(process.env.ACCOUNTS + '/accounts/consult/' + id)
  const user = await res.json()
  return {
    props: {
      user
    }
  }
}

function Index({ user }) {
  return (
    <Layout>
      <EditProfile user={user} />
    </Layout>
  )
}

export default Index
