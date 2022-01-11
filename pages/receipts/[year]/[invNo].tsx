import type { NextPage } from "next"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
// import axios from "axios"

const SingleReceipt: NextPage = () => {
  const [receipt, setReceipt] = useState(null)

  const router = useRouter()
  const { year, invNo } = router.query

  const getReceipt = async () => {
    const data = await fetch(`/api/receipts/${year}/${invNo}`)
    const receipt = await data.json()

    setReceipt(receipt)
  }

  useEffect(() => {
    getReceipt()
  })

  return (
    <div>
      <p>
        Single Receipt with Invoice No. : SNS/{year}/{invNo}
      </p>

      <pre>{JSON.stringify(receipt, null, 2)}</pre>
    </div>
  )
}

export default SingleReceipt
