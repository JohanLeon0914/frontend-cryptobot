import Bienvenido from '../components/public/home/Bienvenido'
import { Layout } from '../components/public/Layout'


export async function getServerSideProps(context) {
    
  const cookie = context.req.cookies

  return {
    props: {
      cookie
    }
  }
}


function IndexPage({ cookie }) {
  return (
    <Layout>
      <Bienvenido cookie={cookie}/>
    </Layout>
  )
}

export default IndexPage
