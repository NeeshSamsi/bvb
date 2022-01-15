import { ReceiptMaxOutput } from "../../../types"
import type { NextPage } from "next"

// import ReactDOMServer from "react-dom/server"
// import jsPDF from "jspdf"
import { useRouter } from "next/router"
import { createElement, useEffect, useRef, useState } from "react"

import Receipt from "../../../components/Receipt"
import TailwindCDN from "../../../components/TailwindCDN"

// const doc = new jsPDF()

const SingleReceipt: NextPage = () => {
  const [receipt, setReceipt] = useState<ReceiptMaxOutput[]>(
    [] as ReceiptMaxOutput[]
  )

  const router = useRouter()
  const { year, receiptNo } = router.query

  const getReceipt = async () => {
    const data = await fetch(`/api/receipts/${year}/${receiptNo}`)
    const receipt = await data.json()

    setReceipt(receipt)
  }

  useEffect(() => {
    getReceipt()
  })

  const printRef = useRef<HTMLDivElement>(null)

  const ReceiptComponent = <Receipt receipt={receipt} />

  const downloadComponent = createElement("div", null, [
    TailwindCDN,
    ReceiptComponent,
  ])

  const handleDownload = () => {
    // console.log(downloadComponent)
    // console.log(ReactDOMServer.renderToStaticMarkup(downloadComponent))
    // // console.log(ReactDOMServer.renderToString(ReceiptComponent))

    // doc.html(ReactDOMServer.renderToStaticMarkup(downloadComponent), {
    //   callback: () => {
    //     doc.save(
    //       `receipt_sns-${receipt[0].receiptNumber?.split("/").join("-")}.pdf`
    //     )
    //   },
    // })

    alert("Downloading receipt not supported yet")
  }

  const handlePrint = () => {
    window.print()
  }
  return (
    <>
      <div className="flex items-center space-x-4 print:hidden">
        <button
          className="inline-block bg-blue-700 hover:bg-blue-600 text-white font-bold mt-8 px-4 py-2 rounded"
          onClick={handleDownload}
        >
          Download
        </button>
        <button
          className="inline-block bg-blue-700 hover:bg-blue-600 text-white font-bold mt-8 px-4 py-2 rounded"
          onClick={handlePrint}
        >
          Print
        </button>
      </div>

      {receipt.length > 0 ? (
        <Receipt ref={printRef} receipt={receipt} />
      ) : (
        <p>Loading...</p>
      )}
    </>
  )
}

export default SingleReceipt
