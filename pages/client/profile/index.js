import axios from 'axios'
import { useRouter } from 'next/router'
import React from 'react'
import Profile from '../../../components/client/profile/Profile'
import { Layout } from '../../../components/public/Layout'


export async function getServerSideProps(context) {
  
  const {id} = context.query
  const res =  await fetch('https://944c-181-132-2-224.ngrok.io/accounts/consult/' + id)
  const user = await res.json()
  return {
    props: {
      user
    }
  }
}

function Index({ user }) {
  console.log(user)
  return (
    <Layout>
      <Profile user={user}  />
    </Layout>
  )
}

export default Index
