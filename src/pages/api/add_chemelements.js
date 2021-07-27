import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const addElement = await prisma.chemElements.create({
      data: {
        image: req.body.image,
        name: req.body.name,
        atomic_no: req.body.atomic_no,
        symbol: req.body.symbol,
        cgb: req.body.cgb,
      }
    })
    res.json(addElement)
  } else {
    res.send('Post method only!')
  }
}