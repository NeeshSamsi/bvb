import type { NextApiRequest, NextApiResponse } from "next"
import type { ReceiptWhereInput } from "../../../../types"

import prisma from "../../../../lib/prisma"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method Not Allowed" })

  const { year, invNo } = req.query

  const where: ReceiptWhereInput = {
    invoiceNumber: `${year}/${invNo}`,
  }

  const receipt = await prisma?.receipt.findMany({
    where,
  })

  res.status(200).json(receipt)
}

export default handler
