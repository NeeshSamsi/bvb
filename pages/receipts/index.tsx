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

      <div className="py-8">
        <Link href="/receipts/new">
          <a className="inline-block bg-blue-700 text-white font-bold px-4 py-2 rounded">
            New Receipt
          </a>
        </Link>
      </div>

      <div className="flex flex-wrap">
        <h1 className="text-3xl text-gray-800 py-4">Show All Receipts</h1>
      </div>

      <pre>{JSON.stringify(receipts, null, 2)}</pre>
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
