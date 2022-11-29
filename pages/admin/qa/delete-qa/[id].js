import axios from "axios"
import { useRouter } from "next/router"

export async function getServerSideProps({ params }){

    const { id } = params 
    const response = await axios.delete(process.env.QA + `qa/delete/${id}`)
  
    return {
      props: {
        response: response.status
      }
    }
  }
  

function DeleteQA({ response }) {
    const router = useRouter()
    router.push('/admin/qa')
  return (
    <div>
    </div>
  )
}

export default DeleteQA
