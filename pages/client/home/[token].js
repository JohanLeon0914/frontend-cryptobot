import React from 'react'

export async function getServerSideProps({ params }){

    const { token } = params 
  
    return {
      props: {
        token
      }
    }
  }

export default function HomeToken({ token }) {
    console.log(token)
  return (
    <div>
      {token}
    </div>
  )
}
