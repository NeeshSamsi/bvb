import type { NextApiRequest, NextApiResponse } from "next";

type responseData = {
  data: {
    message: string;
  };
};

export default function handler(req: NextApiRequest, res: NextApiResponse<responseData>) {
  return req.body.name
    ? res.status(200).json({ data: { message: `Hello ${req.body.name}` } })
    : res.status(200).json({ data: { message: "Hello World!" } });
}
