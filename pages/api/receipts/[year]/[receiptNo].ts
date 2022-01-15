import type { NextApiRequest, NextApiResponse } from "next"
import type { ReceiptWhereInput } from "../../../../types"

import prisma from "../../../../lib/prisma"
import { serializeDate } from "../../../../lib/utils"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method Not Allowed" })

  const { year, receiptNo } = req.query

  try {
    const where: ReceiptWhereInput = {
      receiptNumber: `${year}/${receiptNo}`,
    }

    const data = await prisma?.receipt.findMany({
      where,
    })

    const receipts = data.map((receipt) => {
      return {
        ...receipt,
        date: serializeDate(receipt.date),
        dateOnPayment: serializeDate(receipt.dateOnPayment),
      }
    })

    res.status(200).json(receipts)
  } catch (error) {
    console.error(error)
    return res
      .status(500)
      .json({ message: "Server - Error fetching receipt.", error })
  }
}

export default handler
