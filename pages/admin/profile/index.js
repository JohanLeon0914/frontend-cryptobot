import axios from 'axios'
import React from 'react'
import Profile from '../../../components/admin/profile/Profile'
import { Layout } from '../../../components/public/Layout'


export async function getServerSideProps(context) {
  return {
    props: {
      user: {
        lastName: 'admin',
        firstName: 'i am',
        username: 'admin12',
        emailAddress: 'admin@gmail.com',
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
