import { ReceiptMaxOutput } from "../../../types"
import type { NextPage } from "next"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"

import Receipt from "../../../components/Receipt"

const SingleReceipt: NextPage = () => {
  const [receipt, setReceipt] = useState<ReceiptMaxOutput[]>(
    [] as ReceiptMaxOutput[]
  )

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
      {receipt.length > 0 ? <Receipt receipt={receipt} /> : <p>Loading...</p>}
      <pre>{JSON.stringify(receipt, null, 2)}</pre>
    </div>
  )
}

export default SingleReceipt
