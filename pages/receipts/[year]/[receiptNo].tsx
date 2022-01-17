import { ReceiptMaxOutput } from "../../../types"
import type { NextPage } from "next"

// import ReactDOMServer from "react-dom/server"
// import jsPDF from "jspdf"
import axios, { AxiosResponse } from "axios"
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
    const data: AxiosResponse<ReceiptMaxOutput[]> = await axios.get(
      `/api/receipts/${year}/${receiptNo}`
    )

    const receipt = data.data

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
  }

  const handlePrint = () => {
    window.print()
  }

  return (
    <>
      <div className="flex justify-between items-center mt-8 print:hidden">
        <div className="flex space-x-2">
          <button className="btn-primary">Update</button>
          <button
            className="btn-warn"
            onClick={() => alert("Unfortunately, Cancel not yet implemented.")}
          >
            Cancel
          </button>
        </div>

        <div className="flex justify-end space-x-2">
          <button
            className="btn-primary"
            onClick={() =>
              alert("Unfortunately, Download not yet implemented.")
            }
          >
            Download
          </button>
          <button className="btn-primary" onClick={handlePrint}>
            Print
          </button>
        </div>
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
