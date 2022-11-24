import React from 'react'
import axios from 'axios'
import EditProfile from '../../../../components/client/profile/EditProfile'
import { Layout } from '../../../../components/public/Layout'

export async function getServerSideProps({ params }){

  const {id} = params
  // const user = await axios.get('')

  return {
    props: {
      user
    }
  }
}

function edit() {
  return (
    <Layout>
      <EditProfile />
    </Layout>
  )
}

export default edit
