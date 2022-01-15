import type { NextPage } from "next"
import type { ReceiptMaxOutput } from "../../types"

import prisma from "../../lib/prisma"

import Head from "next/head"
import Link from "next/link"
import { ReactNode } from "react"
import { serializeDate } from "../../lib/utils"

type Props = {
  children?: ReactNode
  receipts: [] | ReceiptMaxOutput[]
}

const Receipts: NextPage<Props> = ({ receipts }) => {
  return (
    <>
      <Head>
        <title>Receipts | BVB SNS</title>
      </Head>

      <Link href="/receipts/new">
        <a className="inline-block bg-blue-700 text-white font-bold px-4 py-2 my-8 rounded">
          New Receipt
        </a>
      </Link>

      <div className="flex flex-col space-y-4">
        <h1 className="text-4xl text-gray-800 py-4">All Receipts</h1>

        {receipts.length > 0 ? (
          <div className="flex flex-col space-y-4">
            {receipts.map((receipt) => (
              <Link
                href={`/receipts/${receipt.receiptNumber}`}
                key={receipt.id}
              >
                <a className="flex justify-between items-center space-x-4 bg-slate-300 p-4 rounded-lg shadow-lg shadow-slate-700/30 text-xl text-slate-800">
                  <div className="flex flex-col space-y-2">
                    <h5 className="text-2xl">{receipt.receiptNumber}</h5>
                    <p>{receipt.name}</p>
                  </div>
                  <div className="font-bold text-slate-700">
                    <p className="font-normal">Total Fee: </p>
                    <h6>₹ {receipt.totalFee}</h6>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </>
  )
}

export const getServerSideProps = async () => {
  const data = await prisma?.receipt.findMany()

  const receipts = data.map((receipt) => {
    return {
      ...receipt,
      date: serializeDate(receipt.date),
      dateOnPayment: serializeDate(receipt.dateOnPayment),
    }
  })

  return {
    props: { receipts },
  }
}

export default Receipts
