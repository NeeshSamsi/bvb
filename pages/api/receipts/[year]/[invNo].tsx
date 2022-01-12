import prisma from "../../../../lib/prisma"
import type { NextApiRequest, NextApiResponse } from "next"

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== "GET")
    return res.status(405).json({ error: "Method Not Allowed" })

  const { year, invNo } = req.query
  const receipt = await prisma?.receipt.findMany({
    where: {
      invoiceNumber: `${year}/${invNo}`,
    },
  })

  res.status(200).json(receipt)
}

export default handler
