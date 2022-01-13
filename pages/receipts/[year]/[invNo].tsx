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

  const handlePrint = () => {
    window.print()
  }

  return (
    <div>
      {receipt.length > 0 ? <Receipt receipt={receipt} /> : <p>Loading...</p>}
      <button
        className="inline-block bg-blue-700 hover:bg-blue-600 text-white font-bold px-4 py-2 rounded"
        onClick={handlePrint}
      >
        Print
      </button>
    </div>
  )
}

export default SingleReceipt
