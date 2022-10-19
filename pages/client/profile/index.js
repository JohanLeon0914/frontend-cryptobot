import axios from 'axios'
import React from 'react'
import Profile from '../../../components/client/profile/Profile'
import { Layout } from '../../../components/public/Layout'


export async function getServerSideProps(context) {
  return {
    props: {
      user: {
        lastName: 'johan',
        firstName: 'leon',
        username: 'johanL',
        emailAddress: 'johan@gmail.com',
        imageProfile: '/images/cryptobot.png'
      }
    }
  }
}

function index({ user }) {
  return (
    <Layout>
      <Profile user={user} />
    </Layout>
  )
}

export default index
