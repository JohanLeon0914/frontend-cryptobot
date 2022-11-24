import { useRouter } from 'next/router'
import React from 'react'
import EditProfile from '../../../../components/client/profile/EditProfile'
import { Layout } from '../../../../components/public/Layout'

function Index() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout>
      <EditProfile id={id} />
    </Layout>
  )
}

export default Index
