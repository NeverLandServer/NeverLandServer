import { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const members = require('/json/members.json')
  res.status(200).json(members)
}
