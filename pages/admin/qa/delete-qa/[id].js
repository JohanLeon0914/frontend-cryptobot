import axios from "axios"
import { useRouter } from "next/router"

export async function getServerSideProps({ params }){

    const { id } = params 
    const response = await axios.delete(process.env.QA + `/qa/delete/${id}`)
    let eliminated = false
    if(response.status === 200) eliminated=true
  
    return {
      props: {
        response: eliminated
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
