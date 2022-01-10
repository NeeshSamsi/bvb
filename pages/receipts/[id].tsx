import type { NextPage } from "next"
import { useRouter } from "next/router"

const SingleReceipt: NextPage = () => {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <p>Single Receipt with ID: {id}</p>
    </div>
  )
}

export default SingleReceipt
