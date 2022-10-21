import { Layout } from '../../../../components/public/Layout'
import EditQA from '../../../../components/admin/qa/EditQA'

export async function getServerSideProps({ params }){

  const { id } = params 

  return {
    props: {
      id
    }
  }
}

function editeQA({ id }) {
  return (
    <Layout>
        <EditQA id={id}/>
    </Layout>
  )
}

export default editeQA
